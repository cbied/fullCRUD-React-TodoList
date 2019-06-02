require('dotenv').config()
const express = require('express'),
    massive = require('massive'),
    app = express(),
    path = '/api/todo',
    controller = require('./controller'),
    { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log(`it's ALIVE`)
    })
    .catch(error => console.log(`Massive: ${error}`))

app.use(express.json())

app.post(path, controller.addTodo)
app.get(path, controller.getTodo)
app.put(`${path}/:id`, controller.editTodo)
app.delete(`${path}/:id`, controller.deleteTodo)

app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} is listening`)
})