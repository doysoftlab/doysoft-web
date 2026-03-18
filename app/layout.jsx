import './globals.css';

export const metadata = {
  title: 'DOYSOFT',
  description: '소프트웨어 개발 스튜디오',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

