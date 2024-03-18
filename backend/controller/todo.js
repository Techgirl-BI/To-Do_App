import Todo from "../model/Todo.js";

export const newTask = async (req, res, next) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json(todo);
    } catch (error) {
        next(error);
    }
}

export const allTasks = async (req, res, next) => {
    try {
        const todos = await Todo.find()
        res.send(todos)
    } catch (error) {
        next(error)
    }
}

export const deleteTodo = async (req, res, next) => {
    try {
        const id = req.params.id
        const todo  = await Todo.findByIdAndDelete(id)
        res.send(todo)
    } catch (error) {
        next(error)
    }
}

