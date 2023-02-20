import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'
import DarkModeToggle from '../DarkModeToggle';
import SocialLinks from '../SocialLinks';



type LayoutProps = {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <>

            <Head>
                <title>Ben Jenkins</title>
                <meta name="description" content="Ben Jenkins - Software Engineer" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className="xl:mx-80 py-2 lg:mx-32 md:mx-16 mx-6 h-screen">
                <div className="flex justify-between my-8">
                    <h1 className='text-gray-800 dark:text-gray-200 font-bold md:text-5xl text-3xl'>Ben Jenkins</h1>
                    <DarkModeToggle />
                </div>
                <div className="flex justify-end mb-2">
                    {/* TODO: extract link to a re-usable component to de-dupe styles */}
                    <Link className='text-gray-700 visited:text-gray-800 dark:text-gray-300 visited:dark:text-gray-200 padding px-2 underline text-xl' href="/">About</Link>
                    {/* TODO: un-comment Posts after CMS is implemented */}
                    {/* <Link className='text-gray-700 visited:text-gray-800  dark:text-gray-300 visited:dark:text-gray-200 padding px-2 underline text-xl' href="/posts ">Posts</Link> */}
                </div>
                {children}
                <SocialLinks />
                <p className="fixed bottom-10">{new Date().getFullYear()} © Ben Jenkins</p>
            </main>
        </>
    )
}

export default Layout