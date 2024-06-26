import express from 'express'
import cors from 'cors'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'https://vite-project-eight-psi.vercel.app/' 
  }));


app.post('/users', async (req, res) => {
    
     await prisma.user.create({
        data: {
            email : req.body.email,
            name : req.body.name,
            age : req.body.age
        }
    })
    
    res.status(201).json(req.body)
})

app.get('/users', async (req, res) => {

    const users = await prisma.user.findMany()

    res.status(200).json(users)
})


app.put('/users/:id', async (req, res) => {
    
    await prisma.user.update({
       where: {
           id: req.params.id
       },
       data: {
           email : req.body.email,
           name : req.body.name,
           age : req.body.age
       }
   })
   
   res.status(201).json(req.body)
})

app.delete('/users/:id', async (req, res) => {
    
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    
    res.status(200).json({message: "Usuário deletado com sucesso!"})
})

app.listen(3000, () => console.log('Server running on port 3000'))


/*

fernando

sZnKV5zromqXqrtP

*/

/* Render

API_project

02a1f2261c766c3342cdb55be7fd47f2

*/