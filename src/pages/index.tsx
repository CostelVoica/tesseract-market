import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div>
            <Head>
                <title>Tesseract Market</title>
            </Head>
        </div>
    )
}
