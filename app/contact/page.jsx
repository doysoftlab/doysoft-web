'use client';

import { useState } from 'react';

const initialForm = {
  company: '',
  name: '',
  title: '',
  phone1: '010',
  phone2: '',
  phone3: '',
  email: '',
  message: '',
  contactMethods: [],
  privacyAgreed: false,
  website: '',
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleMethod = (value) => {
    setForm((prev) => {
      const exists = prev.contactMethods.includes(value);
      return {
        ...prev,
        contactMethods: exists
          ? prev.contactMethods.filter((v) => v !== value)
          : [...prev.contactMethods, value],
      };
    });
  };

  const onFileChange = (e) => {
    const selected = Array.from(e.target.files || []);
    const limited = selected.slice(0, 10);
    setFiles(limited);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const body = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => body.append(key, item));
        } else {
          body.append(key, String(value));
        }
      });

      files.forEach((file) => body.append('files', file));

      const res = await fetch('/api/contact', {
        method: 'POST',
        body,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || '문의 전송에 실패했습니다.');
      }

      setResult({ ok: true, message: '문의가 정상적으로 접수되었습니다.' });
      setForm(initialForm);
      setFiles([]);
      e.target.reset();
    } catch (err) {
      setResult({ ok: false, message: err.message || '오류가 발생했습니다.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-white/10 px-6 py-4 md:px-10">
        <a href="/" className="text-lg font-semibold tracking-[0.24em]">
          DOYSOFT
        </a>

        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-lime-300 px-7 py-2 text-sm font-semibold text-black transition hover:opacity-90"
        >
          문의하기
        </a>
      </header>

      <form onSubmit={onSubmit} className="mx-auto max-w-5xl px-6 pb-24 pt-10 md:px-10">
        <div className="border-l border-white/20 pl-8 md:pl-14">
          <input
            type="text"
            name="website"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => updateField('website', e.target.value)}
          />

          <section className="pt-10">
            <div className="text-5xl font-bold text-white">01</div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
              안녕하세요! 기본 정보를 입력해주세요.
            </h1>

            <div className="mt-14 space-y-10">
              <Field
                label="회사명"
                value={form.company}
                onChange={(v) => updateField('company', v)}
              />
              <Field
                label="담당자 이름"
                value={form.name}
                onChange={(v) => updateField('name', v)}
              />
              <Field label="직책" value={form.title} onChange={(v) => updateField('title', v)} />

              <div>
                <label className="block text-xl font-bold text-white">연락처</label>
                <div className="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4">
                  <PhoneField
                    value={form.phone1}
                    onChange={(v) => updateField('phone1', v)}
                  />
                  <span className="text-2xl text-white/80">-</span>
                  <PhoneField
                    value={form.phone2}
                    onChange={(v) => updateField('phone2', v)}
                  />
                  <span className="text-2xl text-white/80">-</span>
                  <PhoneField
                    value={form.phone3}
                    onChange={(v) => updateField('phone3', v)}
                  />
                </div>
              </div>

              <Field
                label="이메일 주소"
                value={form.email}
                onChange={(v) => updateField('email', v)}
              />
            </div>
          </section>

          <section className="pt-24">
            <div className="text-5xl font-bold text-white">02</div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
              프로젝트에 대해 자세히 이야기를 해주세요.
            </h2>

            <div className="mt-10">
              <textarea
                value={form.message}
                onChange={(e) => updateField('message', e.target.value)}
                placeholder="내용을 입력해주세요."
                className="min-h-[240px] w-full resize-none border border-white/70 bg-transparent px-6 py-5 text-xl text-white outline-none placeholder:text-white/40"
              />
            </div>
          </section>

          <section className="pt-24">
            <div className="text-5xl font-bold text-white">03</div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
              선호 상담 방식
            </h2>

            <div className="mt-10 space-y-6">
              <CheckRow
                label="유선"
                checked={form.contactMethods.includes('유선')}
                onChange={() => toggleMethod('유선')}
              />
              <CheckRow
                label="이메일"
                checked={form.contactMethods.includes('이메일')}
                onChange={() => toggleMethod('이메일')}
              />
              <CheckRow
                label="문자"
                checked={form.contactMethods.includes('문자')}
                onChange={() => toggleMethod('문자')}
              />
            </div>
          </section>

          <section className="pt-24">
            <div className="text-5xl font-bold text-white">04</div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
              파일 첨부 ({files.length}/10)
            </h2>

            <div className="mt-10">
              <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white/10 px-10 py-5 text-xl font-bold text-white hover:bg-white/15">
                파일선택
                <input type="file" className="hidden" multiple onChange={onFileChange} />
              </label>
            </div>

            {files.length > 0 && (
              <div className="mt-6 space-y-2 text-sm text-white/70">
                {files.map((file) => (
                  <div key={`${file.name}-${file.size}`}>{file.name}</div>
                ))}
              </div>
            )}

            <label className="mt-20 flex items-center gap-4">
              <input
                type="checkbox"
                checked={form.privacyAgreed}
                onChange={(e) => updateField('privacyAgreed', e.target.checked)}
                className="h-7 w-7 accent-lime-300"
              />
              <span className="text-2xl font-bold tracking-[-0.02em]">
                개인정보 취급방침에 동의합니다.
              </span>
            </label>

            {result && (
              <div className={`mt-8 text-base ${result.ok ? 'text-lime-300' : 'text-red-400'}`}>
                {result.message}
              </div>
            )}

            <div className="mt-16 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-3 rounded-full bg-[#D7FF00] px-10 py-5 text-2xl font-extrabold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>✈</span>
                <span>{loading ? '전송 중...' : '문의 보내기'}</span>
              </button>
            </div>
          </section>
        </div>
      </form>
    </main>
  );
}

function Field({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-xl font-bold text-white/70">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-4 w-full border-b border-white/70 bg-transparent pb-3 text-xl text-white outline-none"
      />
    </div>
  );
}

function PhoneField({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, ''))}
      className="w-full border-b border-white/70 bg-transparent pb-3 text-center text-2xl text-white outline-none"
    />
  );
}

function CheckRow({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-7 w-7 accent-lime-300"
      />
      <span className="text-2xl font-bold">{label}</span>
    </label>
  );
}

