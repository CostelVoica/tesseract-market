import Head from 'next/head'
let styles = {}
import cartStyles from '../styles/about.module.css'
import layoutStyles from '../styles/layout.module.css'
Object.assign(layoutStyles, cartStyles, layoutStyles)

export default function Cart() {
    return (
        <div>
            <Head>
                <title>Cart</title>
            </Head>
            <div className={layoutStyles['container']}>
                <div className={layoutStyles['center-container']}>
                    <div className={cartStyles['inside-container']}>
                        <h1>The cart is currently a work in progress 🚧 .</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
