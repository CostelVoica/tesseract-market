import styles from '../styles/body.module.css'
import CircuitComponentOne from './CircuitComponentOne'
import CircuitComponentTwo from './CircuitComponentTwo'
import CircuitComponentThree from './CircuitComponentThree'
import { useRouter } from 'next/router'
import Books from '@/pages/books'
import props from '@/pages/books'

function Body() {
    const router = useRouter()

    let pageContent
    // const books: [Book] = [/* array of book objects */];

    switch (router.pathname) {
        case '/books':
            // pageContent = <Books props={props} />
            break
        // Add more cases for other pages
        default:
            pageContent = <div>Default page content</div>
    }
    return (
        <div className={styles.body}>
            <div>
                <CircuitComponentOne />
                <CircuitComponentTwo />
                <CircuitComponentThree />
            </div>
            {pageContent}
        </div>
    )
}

export default Body
