
import { Inter } from '@next/font/google'

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
