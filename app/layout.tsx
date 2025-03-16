import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import styles from './layout.module.css';

const openSans = Open_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'LS Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={openSans.className}>
        <div className={styles.wrapper}>
          <Header className={styles.header} />
          <div className={styles.body}> {children} </div>
        </div>
      </body>
    </html>
  );
}
