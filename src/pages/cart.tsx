import Head from 'next/head'
import styles from '../styles/layout.module.css'
let test = {}

export default function Cart() {
    return (
        <div>
            <Head>
                <title>Cart</title>
            </Head>
            <div className={styles['container']}>
                <div className={styles['center-container']}>
                    <h1>The cart is currently a work in progress 🚧 .</h1>
                </div>
            </div>
        </div>
    )
}
