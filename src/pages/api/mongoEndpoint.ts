// bad endpoint

import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/utils/mongo/db'

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     const client = await clientPromise
//     const db = client.db()

//     // use db to query your MongoDB database

//     const books = await db.collection('books').find({}).toArray()
//     console.log(
//         'Successfully connected to MongoDB and obtained a reference to the database instance:',
//         books
//     )
//     res.status(200).json(books)
// }
