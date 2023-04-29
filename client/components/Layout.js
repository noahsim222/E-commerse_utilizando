import React from 'react'
import { Header } from './Header'


export const Layout = ({ children }) => {
    return (
        <div className='min-h-screen bg-gradient-to-r from-slate-900 to-sky-900'>
            <div className=''>
                <Header />
                <main className='mt-20'>
                    {children}
                </main>
            </div>
        </div>
    )
}
