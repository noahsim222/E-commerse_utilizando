import React from 'react'
import { Header } from './Header'
import Footer from '@/pages/Footer'
import Head from 'next/head'


export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta property='og:image' content='public/jordan-logo.jpg' />
                <title>Jordan Boots</title>
            </Head>
            <div className='antialiased text-slate-500 bg-[url(https://wallpapers.com/images/featured/rzjnqjw5ozl4xvxo.jpg)] bg-no-repeat bg-cover  '>
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
