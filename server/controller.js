

const addTodo = (req,res) => {
    const db = req.app.get('db'),
        { description, completed } = req.body


    db.addTodo( description, completed )
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(`C-addTodo: ${error}`))
}

const getTodo = (req,res) => {
    const db = req.app.get('db')

    db.getTodos()
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(`C-getTodos: ${error}`))
}

const editTodo = (req,res) => {
    const db = req.app.get('db'),
        { todo_id, description, completed } = req.body;

    db.editTodo( todo_id, description, completed )
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(`C-editTodos: ${error}`))
}

const deleteTodo = (req,res) => {
    const db = req.app.get('db'),
        { id } = req.params

    db.deleteTodo( id )
        .then(() => res.sendStatus(200))
        .catch(error => res.status(500).send(`C-deleteTodos: ${error}`))
}

module.exports = {
    addTodo,
    getTodo,
    editTodo,
    deleteTodo
}