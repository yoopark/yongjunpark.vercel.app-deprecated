import { useLocale } from 'next-intl';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '박용준 포트폴리오',
  description: '프론트엔드 개발자 박용준의 포트폴리오',
};

type LocalLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function LocaleLayout({ children, params }: LocalLayoutProps) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>{locale !== 'ko' && <title>Yongjun Park</title>}</head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
