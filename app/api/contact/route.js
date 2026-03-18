import { NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const schema = z.object({
  company: z.string().min(1, '회사명을 입력해주세요.'),
  name: z.string().min(1, '담당자 이름을 입력해주세요.'),
  title: z.string().optional(),
  phone1: z.string().min(2),
  phone2: z.string().min(3),
  phone3: z.string().min(3),
  email: z.string().email('이메일 형식이 올바르지 않습니다.'),
  message: z.string().min(10, '프로젝트 내용을 조금 더 자세히 입력해주세요.'),
  contactMethods: z.array(z.string()).min(1, '선호 상담 방식을 선택해주세요.'),
  privacyAgreed: z.boolean().refine((v) => v === true, {
    message: '개인정보 취급방침 동의가 필요합니다.',
  }),
  website: z.string().optional(),
});

export async function POST(req) {
  try {
    const formData = await req.formData();

    const files = formData.getAll('files');
    const contactMethods = formData.getAll('contactMethods');

    const raw = {
      company: String(formData.get('company') || ''),
      name: String(formData.get('name') || ''),
      title: String(formData.get('title') || ''),
      phone1: String(formData.get('phone1') || ''),
      phone2: String(formData.get('phone2') || ''),
      phone3: String(formData.get('phone3') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || ''),
      contactMethods: contactMethods.map(String),
      privacyAgreed: String(formData.get('privacyAgreed')) === 'true',
      website: String(formData.get('website') || ''),
    };

    if (raw.website) {
      return NextResponse.json({ ok: true });
    }

    const parsed = schema.safeParse(raw);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || '입력값을 확인해주세요.';
      // 서버 로그에서 어떤 필드가 문제인지 확인할 수 있도록 출력
      console.error('[CONTACT_VALIDATION_ERROR]', {
        raw,
        issues: parsed.error.issues,
      });
      return NextResponse.json({ message: firstError }, { status: 400 });
    }

    const attachments = [];

    for (const file of files) {
      if (!(file instanceof File) || file.size === 0) continue;
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { message: '첨부 파일은 개당 10MB 이하만 가능합니다.' },
          { status: 400 },
        );
      }

      const bytes = await file.arrayBuffer();
      attachments.push({
        filename: file.name,
        content: Buffer.from(bytes),
      });
    }

    const d = parsed.data;

    const subject = `[DOYSOFT 문의] ${d.company} / ${d.name}`;

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6">
        <h2>새 문의가 접수되었습니다.</h2>
        <p><strong>회사명:</strong> ${escapeHtml(d.company)}</p>
        <p><strong>담당자 이름:</strong> ${escapeHtml(d.name)}</p>
        <p><strong>직책:</strong> ${escapeHtml(d.title || '-')}</p>
        <p><strong>연락처:</strong> ${escapeHtml(`${d.phone1}-${d.phone2}-${d.phone3}`)}</p>
        <p><strong>이메일:</strong> ${escapeHtml(d.email)}</p>
        <p><strong>선호 상담 방식:</strong> ${escapeHtml(d.contactMethods.join(', '))}</p>
        <hr />
        <p><strong>문의 내용</strong></p>
        <div style="white-space:pre-wrap">${escapeHtml(d.message)}</div>
      </div>
    `;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: d.email,
      subject,
      html,
      attachments: attachments.map((file) => ({
        filename: file.filename,
        content: file.content,
      })),
    });

    return NextResponse.json({ ok: true, message: '문의가 접수되었습니다.' });
  } catch (error) {
    return NextResponse.json(
      { message: '서버 오류가 발생했습니다.' },
      { status: 500 },
    );
  }
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

