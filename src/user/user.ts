import { PrismaClient, User } from '@prisma/client';
import express from 'express';

const user = express.Router();
const prisma = new PrismaClient();

user.get('/', async (req, res) => {
  const result = await prisma.user.findMany();
  res.json(result)
})

user.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const result = await prisma.user.findFirst({ where: { id }, include: { accessRights: true } })
    res.json(result)
  } catch (error) {
    res.status(500).json(error)
  }
})

user.post('/', async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const result = await prisma.user.create({ data: { name, email, password } });
    res.json(result);
  } catch (error) {
    res.status(500).json(error)
  }
})

user.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await prisma.user.findFirst({ where: { email, password } });
    res.json(result);
  } catch (error) {
    res.status(500).json(error)
  }
})

user.put('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const data = req.body as User;
  const result = await prisma.user.update({ where: { id }, data })
  res.json(result);
})

user.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const result = await prisma.user.delete({ where: { id } })
  res.json(result)
})

export default user;