import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/books.module.css'

type Props = {
    books: [Book]
}

type Book = {
    _id: String
    title: String
    author: String
    description: String
    price: String
    quantity: String
    imageURL: any
    categories: [String]
}

export async function getServerSideProps() {
    try {
        let response = await fetch('http://localhost:3000/api/getBooks')
        let books = await response.json()

        return {
            props: { books: JSON.parse(JSON.stringify(books)) },
        }
    } catch (e) {
        console.error(e)
        return {
            props: { books: [] },
        }
    }
}

export default function Books(props: Props) {
    const [books, setBooks] = useState<[Book]>(props.books)
    console.log('books array: ', books)

    return (
        <div>
            <Head>
                <title>Browse Books</title>
            </Head>
            <h1>Books</h1>
            <div className={styles['books-container']}>
                {books.map((book) => (
                    <div key={`book-${book._id}`}>
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                        <Image
                            src={`/${book.title}.jpg`}
                            height="100"
                            width="100"
                            alt={book.title.toString()}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
