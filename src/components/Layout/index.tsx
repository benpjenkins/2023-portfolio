import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'
import DarkModeToggle from '../DarkModeToggle';



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
            <main>
                <DarkModeToggle />
                <h1>Ben Jenkins</h1>
                <div className="nav">
                    <Link href="/">About</Link>
                    <Link href="/posts">Posts</Link>
                </div>
                {children}
            </main>
        </>
    )
}

export default Layout