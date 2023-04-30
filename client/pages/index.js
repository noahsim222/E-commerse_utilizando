import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Header } from '@/components/Header'
import { Layout } from '@/components/Layout'

import MostrarProductos from './MostrarProductos'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <MostrarProductos />
      </Layout>

    </>
  )
}
