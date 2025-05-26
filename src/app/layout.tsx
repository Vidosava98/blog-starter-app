import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import cn from "classnames";
//import { ThemeSwitcher } from "./_components/theme-switcher";
import Header from "@/app/_components/header";
import "@/app/globals.css";
import ThemeProvider from "./_components/ThemeProvider";
import { FloatingNav } from "./_components/ui/FloatingNav";

//const inter = Inter({ subsets: ["latin"] });
const navBar = [
  { name: "Home", link: "/" },
  { name: "About Me", link: "/#aboutMeId", scroll: false },
  { name: "Technologies", link: "/#techId", scroll: false },
  { name: "Projects", link: "/#projectsId", scroll: false },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "#footerId" },
  { name: "Resume", link: "/Vidosava Arsic CV.pdf" },
];
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
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="Resource/Images/Icons/website.svg"
        />
      </head>
      <body className={cn("bg-black-100 text-white")}>
        {/* <ThemeSwitcher /> */}
        {/* <Header /> */}
        <FloatingNav navItems={navBar} />
        <div className="min-h-screen">
          {/* <ThemeProvider>{children}</ThemeProvider>
          TODO: otkomentariši kada/ako budeš htela da se zezaš sa dark mode. Ignoriši dok ne popraviš build: :) */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
