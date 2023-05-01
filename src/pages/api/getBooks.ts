import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/utils/mongo/db'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const client = await clientPromise
        const db = client.db('myScifiDatabase')

        // use db to query your MongoDB database

        const books = await db.collection('books').find({}).toArray()
        console.log(
            'Successfully connected to MongoDB and obtained the following books collection: ',
            books
        )
        res.json(books)
    } catch (error) {
        console.error(error)
    }
}
