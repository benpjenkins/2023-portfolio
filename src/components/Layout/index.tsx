import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import DarkModeToggle from "../DarkModeToggle";
import SocialLinks from "../SocialLinks";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Ben Jenkins</title>
        <meta name="description" content="Ben Jenkins - Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="mx-6 h-screen py-2 md:mx-16 lg:mx-32 xl:mx-80">
        <div className="my-8 flex justify-between">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl">
            Ben Jenkins
          </h1>
          <DarkModeToggle />
        </div>
        <div className="mb-2 flex justify-end">
          {/* TODO: extract link to a re-usable component to de-dupe styles */}
          <Link
            className="px-2 text-xl text-gray-700 underline visited:text-gray-800 dark:text-gray-300 visited:dark:text-gray-200"
            href="/"
          >
            About
          </Link>
          <Link
            className="px-2  text-xl text-gray-700 underline visited:text-gray-800 dark:text-gray-300 visited:dark:text-gray-200"
            href="/posts "
          >
            Posts
          </Link>
        </div>
        {children}
        <SocialLinks />
        <p className="pb-8">{new Date().getFullYear()} © Ben Jenkins</p>
      </main>
    </>
  );
};

export default Layout;
