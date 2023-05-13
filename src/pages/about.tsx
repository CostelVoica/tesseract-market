import Head from 'next/head'
import styles from '../styles/layout.module.css'

export default function About() {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <div className={styles['container']}>
                <div className={styles['center-container']}>
                    <h1>This is a portfolio project. Its stack is:</h1>
                    <ul>
                        <li>
                            NextJS and Typescript for the frontend/backend logic
                        </li>
                        <li>MongoDB as the database for the book info</li>
                        <li>Tailwind CSS and CSS modules for styling</li>
                        <li>Stable Diffusion for book cover images</li>
                        <li>ESLint for the linter</li>
                        <li>Github for version control</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
{
    /* <div className={styles['center-container']}> */
}
