import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
let styles = {}
import booksStyles from '../styles/books.module.css'
import layoutStyles from '../styles/layout.module.css'
Object.assign(styles, booksStyles, layoutStyles)

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

export async function getStaticProps() {
    try {
        let response = await fetch(
            'http://tesseract-market.vercel.app/api/getBooks'
        )
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
            <div className={layoutStyles.container}>
                <div className={layoutStyles['center-container']}>
                    {books.map((book) => (
                        <div
                            className={booksStyles['inside-container']}
                            key={`book-${book._id}`}
                        >
                            <div className={booksStyles['book-container']}>
                                <h2>{book.title}</h2>
                                <Image
                                    src={`/${book.title}.jpg`}
                                    height="100"
                                    width="100"
                                    alt={book.title.toString()}
                                />
                            </div>
                            <div className={booksStyles.price}>
                                <h1>Price: {book.price}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
