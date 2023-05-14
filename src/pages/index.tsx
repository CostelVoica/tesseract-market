import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import homeStyles from '../styles/home.module.css'
import layoutStyles from '../styles/layout.module.css'
Object.assign(layoutStyles, homeStyles, layoutStyles)

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div>
            <Head>
                <title>Tesseract Market</title>
            </Head>
            <div className={layoutStyles.container}>
                <div className={layoutStyles['center-container']}>
                    <div className={homeStyles['inside-container']}></div>
                    <h1>
                        Welcome to Tesseract Market! Come browse our AI
                        generated{' '}
                        <Link href="/books" className={layoutStyles.body__link}>
                            books
                        </Link>
                        . (This website is a work-in-progress.)
                    </h1>
                </div>
            </div>
        </div>
    )
}
