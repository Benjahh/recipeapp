import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
mongoose.connect('mongodb+srv://benjah:<password>@cluster0.qr5gjpr.mongodb.net/test')
.then(() => console.log('connected to server'))
.catch(() => console.log('error no connection'))

app.use(express.json())
app.use(cors())

app.listen(3001, () => console.log('server started!'))
