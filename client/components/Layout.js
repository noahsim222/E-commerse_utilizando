import React from 'react'
import { Header } from './Header'
import Footer from '@/pages/Footer'
import Head from 'next/head'


export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta property='og:image' content='/nike-logo.png' />
                <title>Jordan Boots</title>
            </Head>
            <div className='antialiased text-slate-500 bg-[url(https://tailwindcss.com/_next/static/media/blog-post-form-dark@90.5b274bea.jpg)]  '>
                <div className=''>
                    <Header />
                    <main className='mt-20'>
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}
