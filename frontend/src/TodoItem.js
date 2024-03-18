import React from 'react';

const base_url = "http://localhost:4001/tasks";

const TodoItem = (props) => {
    const { name, id, setItems } = props;

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${base_url}/delete/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete task");
            }
            const data = await response.json();
            setItems(items => items.filter(item => item._id !== data._id));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <div className="todo">
            <div className="text">{name}</div>
            <div className="delete-todo" onClick={() => handleDelete(id)}><span>X</span></div>
        </div>
    );
};

export default TodoItem;
