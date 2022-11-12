import express from 'express'
import { PrismaClient, Right } from '@prisma/client'

const rights = express.Router()
const client = new PrismaClient();

rights.get('/', async (req, res) => {
  try {
    const rights = await client.right.findMany()
    res.json(rights)
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
})

export default rights