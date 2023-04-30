import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/mongo/db'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const client = await clientPromise
        console.log('logging client in getBooks endpoint: ', client)
        const db = client.db()

        // use db to query your MongoDB database

        const books = await db.collection('books').find({}).toArray()
        console.log(
            'Successfully connected to MongoDB and obtained a the books collection',
            books
        )
        res.status(200).json(books)
        res.json(books)
    } catch (error) {
        console.error(error)
    }
}
