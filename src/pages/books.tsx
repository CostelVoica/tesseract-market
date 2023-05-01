import Head from 'next/head'
import { useState } from 'react'

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
    image: any
    categories: [String]
}

export async function getServerSideProps() {
    try {
        let response = await fetch(
            'http://scifi-ecommerce-v2.vercel.app/api/getBooks'
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
    console.log('THIS PROJECT IS WORKING')

    return (
        <div>
            <Head>
                <title>Browse Books</title>
            </Head>
            <h1>Books</h1>
            <div>
                {books.map((book) => (
                    <div key={`book-${book._id}`}>
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                        {/* <img src={book.image} alt={book.title} /> */}
                    </div>
                ))}
            </div>
        </div>
    )
}
