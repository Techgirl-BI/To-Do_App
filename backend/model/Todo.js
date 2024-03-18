import mongoose from 'mongoose'
const todoSchema = new mongoose.Schema( {name: String} )

const Todo = mongoose.model('Todo', todoSchema)
export default Todo
