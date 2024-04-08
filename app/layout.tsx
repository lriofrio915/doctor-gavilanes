import type { Metadata } from "next";

import { Inter as CustomFont } from 'next/font/google';
import { Toaster } from "react-hot-toast";
import '~/assets/styles/base.css';
import Providers from "~/components/atoms/Providers";
import Announcement from "~/components/widgets/Announcement";
import Footer2 from "~/components/widgets/Footer2";
import Header from "~/components/widgets/Header";
import { SITE } from '~/config';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="tracking-tight antialiased text-gray-900 dark:text-slate-300 dark:bg-slate-900">
        <Providers>
          <Announcement />
          <Header />
          <main>{children}</main>
          <Footer2 />
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
