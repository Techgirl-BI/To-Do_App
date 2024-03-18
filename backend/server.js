import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { taskRouter } from './routes/taskRoutes.js'
dotenv.config({})

const app = express(); 


app.use(express.json()); 
app.use(cors()); 
app.use("/tasks", taskRouter)

app.get('/', (req,res) => {
    try {
        res.status(200).json({
            message: 'Hi, welcome to my todo App!'
        })
    } catch (error) {
       res.send(error.message)
    }
})

app.all('*', (req,res) => {
     res.status(404).json({
       mesaage: "Page not found"
     })
})
const port = 4002; 

app.listen(port, () => console.log(`Server is running on port ${port}`)); 
const connectionString = process.env.MONGO_URI; 
mongoose.connect(connectionString)
        .then(() => console.log('Connected to the database…')) 
        .catch((err) => console.error('Connection error:', err));
