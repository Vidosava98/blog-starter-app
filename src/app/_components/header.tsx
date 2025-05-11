"use client";
import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8 flex items-center">
      <Link href="/" className="hover:underline mx-4">
        Portfolio
      </Link>
      <Link href="/blog" className="hover:underline mx-4">
        Blog
      </Link>
    </h2>
  );
};

export default Header;
