export default function Home() {
  const services = [
    {
      title: 'Vision Inspection',
      desc: '카메라 연동, 이미지 검사, 파티클 검출, 측정 자동화를 포함한 비전 시스템을 개발합니다.',
    },
    {
      title: 'Custom Software',
      desc: '현장 프로세스에 맞춘 WPF, C#, Python 기반 맞춤형 소프트웨어를 설계하고 구현합니다.',
    },
    {
      title: 'AI Integration',
      desc: '기존 검사 로직에 AI 분석, 분류, 품질 향상 기능을 연결해 실제 업무에 적용합니다.',
    },
  ];

  const process = [
    {
      no: '01',
      title: 'Consulting',
      desc: '필요 기능과 실제 사용 환경을 먼저 정리합니다.',
    },
    {
      no: '02',
      title: 'Planning',
      desc: 'UI, 기능 범위, 장비 연동 구조를 구체화합니다.',
    },
    {
      no: '03',
      title: 'Development',
      desc: '실사용 기준으로 빠르게 개발하고 반복 수정합니다.',
    },
    {
      no: '04',
      title: 'Delivery',
      desc: '현장 적용, 안정화, 후속 개선까지 이어집니다.',
    },
  ];

  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 md:px-10">
          <header className="flex items-center justify-between py-4">
            <div className="text-lg font-semibold tracking-[0.24em]">DOYSOFT</div>
            <nav className="hidden gap-8 text-sm text-white/70 md:flex">
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#services" className="transition hover:text-white">
                Services
              </a>
              <a href="#process" className="transition hover:text-white">
                Process
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </header>

          <div className="flex flex-1 items-center py-16 md:py-24">
            <div className="grid w-full gap-12 md:grid-cols-[1.5fr_0.8fr] md:gap-16">
              <div>
                <div className="mb-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-xs tracking-[0.18em] text-white/60">
                  SOFTWARE STUDIO
                </div>

                <h1 className="max-w-4xl text-5xl font-semibold leading-[1.06] tracking-[-0.04em] md:text-7xl">
                  실무에 바로 적용되는
                  <br />
                  소프트웨어를 만듭니다
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
                  DOYSOFT는 비전 검사, 측정, 자동화, AI 연동까지
                  실제 업무에 쓰이는 소프트웨어를 설계하고 개발합니다.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:opacity-90"
                  >
                    프로젝트 문의
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                  >
                    서비스 보기
                  </a>
                </div>
              </div>

              <div className="flex items-end">
                <div className="w-full border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                  <div className="text-xs tracking-[0.18em] text-white/40">SELECTED FOCUS</div>
                  <div className="mt-6 space-y-5 text-sm text-white/80">
                    <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-4">
                      <span>Vision Inspection</span>
                      <span className="text-white/40">01</span>
                    </div>
                    <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-4">
                      <span>Measurement System</span>
                      <span className="text-white/40">02</span>
                    </div>
                    <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-4">
                      <span>Automation Control</span>
                      <span className="text-white/40">03</span>
                    </div>
                    <div className="flex items-start justify-between gap-6">
                      <span>AI-based Analysis</span>
                      <span className="text-white/40">04</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 border-t border-white/10 py-8 text-sm text-white/50 md:grid-cols-3">
            <div>Vision / Measurement / Automation</div>
            <div>C# / WPF / Python / AI / Camera</div>
            <div>Built for real production environments</div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-xs tracking-[0.2em] text-white/40">ABOUT</div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
                기술은 복잡하게,
                <br />
                결과는 직관적으로.
              </h2>
              <p className="mt-8 max-w-3xl text-base leading-8 text-white/60 md:text-lg">
                장비 연동, 검사 로직, 측정 기능, UI, 데이터 처리까지
                실제 현장에서 필요한 흐름을 기준으로 제품을 만듭니다.
                보기 좋은 데모보다, 실제로 쓰이는 구조를 우선합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <div className="text-xs tracking-[0.2em] text-white/40">SERVICES</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                필요한 기능을
                <br />
                실제 구조로 만듭니다
              </h2>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {services.map((item) => (
              <div
                key={item.title}
                className="group bg-black p-8 transition hover:bg-white hover:text-black"
              >
                <div className="text-sm text-white/40 transition group-hover:text-black/40">
                  Service
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/60 transition group-hover:text-black/70">
                  {item.desc}
                </p>
                <div className="mt-10 text-sm font-medium">Explore</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="mb-14">
            <div className="text-xs tracking-[0.2em] text-white/40">PROCESS</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
              빠르게 만들되,
              <br />
              아무렇게나 만들지 않습니다
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <div key={item.no} className="bg-black p-8">
                <div className="text-5xl font-semibold tracking-[-0.05em] text-white/20">
                  {item.no}
                </div>
                <h3 className="mt-10 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="border border-white/10 bg-white/[0.03] px-8 py-12 md:px-14 md:py-16">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div>
                <div className="text-xs tracking-[0.2em] text-white/40">CONTACT</div>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
                  프로젝트가 필요하다면
                  <br />
                  지금 바로 시작하시면 됩니다
                </h2>
              </div>

              <div className="md:text-right">
                <a
                  href="mailto:contact@doysoft.co.kr"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  contact@doysoft.co.kr
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
            <div>© 2026 DOYSOFT</div>
            <div>Software Studio</div>
          </footer>
        </div>
      </section>
    </main>
  );
}

