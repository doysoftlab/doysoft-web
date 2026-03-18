import Image from 'next/image';

import logoWhiteWithText from './resources/logo/logo_white_with_text.png';

export default function DoysoftHomepage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 md:px-10 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-4">
            <Image
              src={logoWhiteWithText}
              alt="DOYSOFT"
              priority
              className="h-7 w-auto"
            />
            <div className="hidden sm:block">
              <div className="text-sm text-zinc-400">소프트웨어 개발 스튜디오</div>
            </div>
          </div>
          <a
            href="mailto:contact@doysoft.co.kr"
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-white/10"
          >
            문의하기
          </a>
        </header>

        <section className="grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-zinc-300">
              기업 맞춤형 개발
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              현업이 바로 쓰는, 실무형 소프트웨어를 만듭니다.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
              DOYSOFT는 회사의 업무 흐름에 맞춘 커스텀 개발을 진행합니다. 이미지 처리/비전 워크플로우,
              데스크톱 앱, 운영 자동화 도구 등 “필요한 기능을 필요한 만큼” 안정적으로 구현합니다.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:contact@doysoft.co.kr"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                견적 문의
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:bg-white/10"
              >
                서비스 보기
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-sm">
              <div className="text-sm font-medium text-zinc-400">핵심 분야</div>
              <div className="mt-4 space-y-4 text-sm text-zinc-200">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <div className="font-semibold text-zinc-100">맞춤형 소프트웨어</div>
                  <div className="mt-1 leading-6 text-zinc-300">
                    업무 흐름에 맞춰 설계하고, 실제 사용성과 운영까지 고려해 구현합니다.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <div className="font-semibold text-zinc-100">이미지/비전 워크플로우</div>
                  <div className="mt-1 leading-6 text-zinc-300">
                    검사·측정·분석·자동화 등 이미지 기반 시스템에 필요한 로직을 구현합니다.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <div className="font-semibold text-zinc-100">외주/협업 개발 지원</div>
                  <div className="mt-1 leading-6 text-zinc-300">
                    사내 도구, 자동화, 고객사 대응 기능 등 필요한 구간만 안정적으로 합류합니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-white/10 py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-400">Services</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              DOYSOFT가 제공하는 서비스
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              범위를 명확히 정하고, 빠르게 소통하며, 과한 복잡도 대신 “성과가 나는 구현”에 집중합니다.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: '업무용 맞춤 소프트웨어',
                desc: '데스크톱/웹 기반 업무 도구를 요구사항에 맞게 설계·개발합니다.',
              },
              {
                title: '이미지 처리/분석',
                desc: '이미지 기반 분석·개선·측정·자동화 기능을 구현합니다.',
              },
              {
                title: '소프트웨어 외주/상주 지원',
                desc: '단기/중장기 프로젝트에 맞춰 안정적으로 개발 지원을 제공합니다.',
              },
              {
                title: '기술 컨설팅',
                desc: '구현 방향, 구조, 일정/난이도(가능성) 관점에서 현실적인 제안을 드립니다.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <div className="text-lg font-semibold tracking-tight">{item.title}</div>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-400">Approach</div>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">명확하게 만들고, 확실히 납품합니다.</h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300">
                DOYSOFT는 직관적인 커뮤니케이션, 현실적인 범위 설정, 탄탄한 실행을 중요하게 생각합니다.
                복잡하게 만드는 개발이 아니라, “실제로 돌아가는 소프트웨어”를 목표로 합니다.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                '빠른 소통',
                '실무 중심 구현',
                '명확한 범위 합의',
                '안정적인 납품',
              ].map((label) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm font-medium text-zinc-200"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-16 md:py-20">
          <div className="rounded-[32px] border border-white/10 bg-white/5 px-6 py-10 text-white md:px-10 md:py-12">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-400">Contact</div>
              <h4 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                필요한 걸, 제대로 만들어 드리겠습니다.
              </h4>
              <p className="mt-4 text-base leading-7 text-zinc-300">
                프로젝트 문의, 협업, 외주 개발이 필요하시면 아래 메일로 편하게 연락 주세요.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="mailto:contact@doysoft.co.kr"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                contact@doysoft.co.kr
              </a>
              <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-zinc-300">
                DOYSOFT / 대표 강도영
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-6 text-sm text-zinc-500">
          © 2026 DOYSOFT. 모든 권리 보유.
        </footer>
      </section>
    </main>
  );
}
