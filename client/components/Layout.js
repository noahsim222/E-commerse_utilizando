import React from 'react'
import { Header } from './Header'
import Footer from '@/pages/Footer'



export const Layout = ({ children }) => {
    return (
        <div className='antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 '>
            <div className=''>
                <Header />
                <main className='mt-20'>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}
