import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div>
            <Head>
                <title>Tesseract Market</title>
            </Head>
            <div className={styles.container}>
                <div className={styles['center-container']}>
                    <h1>
                        Welcome to Tesseract Market! Come browse our AI
                        generated{' '}
                        <Link href="/books" className={styles.body__link}>
                            books
                        </Link>
                        . Better website element alignment is being implemented.
                    </h1>
                </div>
            </div>
        </div>
    )
}
