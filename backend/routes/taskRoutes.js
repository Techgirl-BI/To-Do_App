import express from 'express'
import { allTasks, deleteTodo, newTask } from '../controller/todo.js'

export const taskRouter = express.Router()

taskRouter.get('/', allTasks)
taskRouter.post("/new", newTask)
taskRouter.delete("/delete/:id", deleteTodo)