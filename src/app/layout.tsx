import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import cn from "classnames";
//import { ThemeSwitcher } from "./_components/theme-switcher";
import Header from "@/app/_components/header";
import "@/app/globals.css";
import ThemeProvider from "./_components/ThemeProvider";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Vida's portfolio`,
  description: `Hi, I'm Vida — a full stack developer skilled in modern web technologies, backend development, and databases. Explore my projects and resume!. Check out my full-stack developer portfolio - a statically generated blog example using Next.js and ${CMS_NAME}.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={cn("bg-slate-900 text-slate-400")}>
        {/* <ThemeSwitcher /> */}
        <Header />
        <div className="min-h-screen">
          {/* <ThemeProvider>{children}</ThemeProvider> TODO: otkomentariši kada/ako budeš htela da se zezaš sa dark mode. Ignoriši dok ne popraviš build: :) */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
