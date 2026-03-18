export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#1f2128] text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="/" className="text-lg font-semibold tracking-[0.2em]">
          DOYSOFT
        </a>

        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-semibold text-white">
            Portfolio
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#D7FF00] px-8 py-4 text-lg font-bold text-black"
          >
            문의하기
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-24 pt-10 md:px-10">
        <div className="border-l border-white/20 pl-8 md:pl-14">
          {/* 01 */}
          <section className="pt-10">
            <div className="text-5xl font-bold tracking-[-0.03em] text-white">01</div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
              안녕하세요! 기본 정보를 입력해주세요.
            </h1>

            <div className="mt-14 space-y-10">
              <Field label="회사명" />
              <Field label="담당자 이름" />
              <Field label="직책" />

              <div>
                <label className="block text-xl font-bold text-white">연락처</label>
                <div className="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4">
                  <PhoneField placeholder="010" />
                  <span className="text-2xl text-white/80">-</span>
                  <PhoneField placeholder="0000" />
                  <span className="text-2xl text-white/80">-</span>
                  <PhoneField placeholder="0000" />
                </div>
              </div>

              <Field label="이메일 주소" />
            </div>
          </section>

          {/* 02 */}
          <section className="pt-24">
            <div className="text-5xl font-bold tracking-[-0.03em] text-white">02</div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
              프로젝트에 대해 자세히 이야기를 해주세요.
            </h2>

            <div className="mt-10">
              <textarea
                placeholder="내용을 입력해주세요."
                className="min-h-[240px] w-full resize-none border border-white/70 bg-transparent px-6 py-5 text-xl text-white outline-none placeholder:text-white/40"
              />
            </div>
          </section>

          {/* 03 */}
          <section className="pt-24">
            <div className="text-5xl font-bold tracking-[-0.03em] text-white">03</div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
              선호 상담 방식
            </h2>

            <div className="mt-10 space-y-6">
              <CheckRow label="유선" />
              <CheckRow label="이메일" />
              <CheckRow label="문자" />
            </div>
          </section>

          {/* 04 */}
          <section className="pt-24">
            <div className="text-5xl font-bold tracking-[-0.03em] text-white">04</div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] md:text-5xl">
              파일 첨부 (0/10)
            </h2>

            <div className="mt-10">
              <label className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white/10 px-10 py-5 text-xl font-bold text-white hover:bg-white/15">
                파일선택
                <input type="file" className="hidden" multiple />
              </label>
            </div>

            <div className="mt-20 flex items-center gap-4">
              <input
                type="checkbox"
                className="h-7 w-7 border border-white/60 bg-transparent accent-lime-300"
              />
              <span className="text-2xl font-bold tracking-[-0.02em]">
                개인정보 취급방침에 동의합니다.
              </span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-sm text-white/60">
                ?
              </span>
            </div>

            <div className="mt-16 flex justify-end">
              <button className="inline-flex items-center gap-3 rounded-full bg-[#D7FF00] px-10 py-5 text-2xl font-extrabold text-black transition hover:opacity-90">
                <span>✈</span>
                <span>문의 보내기</span>
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function Field({ label }) {
  return (
    <div>
      <label className="block text-xl font-bold text-white/70">{label}</label>
      <input
        type="text"
        className="mt-4 w-full border-b border-white/70 bg-transparent pb-3 text-xl text-white outline-none placeholder:text-white/30"
      />
    </div>
  );
}

function PhoneField({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border-b border-white/70 bg-transparent pb-3 text-center text-2xl text-white outline-none placeholder:text-white/60"
    />
  );
}

function CheckRow({ label }) {
  return (
    <label className="flex items-center gap-4">
      <input
        type="checkbox"
        className="h-7 w-7 border border-white/60 bg-transparent accent-lime-300"
      />
      <span className="text-2xl font-bold">{label}</span>
    </label>
  );
}

