import React from 'react'
import { Header } from './Header'
import Footer from '@/pages/Footer'
import Head from 'next/head'


export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta property='og:image'  content='/ls.png' />
                <title>Jordan Boots</title>
            </Head>
            <div className='w-full text-slate-500 bg-[url(https://www.pcclean.io/wp-content/uploads/2020/4/BVF7Fv.jpg)] 
              '>
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
