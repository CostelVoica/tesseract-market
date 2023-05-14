import Head from 'next/head'
import aboutStyles from '../styles/about.module.css'
import layoutStyles from '../styles/layout.module.css'
Object.assign(layoutStyles, aboutStyles, layoutStyles)

export default function About() {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <div className={layoutStyles['container']}>
                <div className={layoutStyles['center-container']}>
                    <div className={aboutStyles['inside-container']}>
                        <h1>This is a portfolio project. Its stack is:</h1>
                        <ul>
                            <li>
                                NextJS and Typescript for the frontend/backend
                                logic
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
        </div>
    )
}
