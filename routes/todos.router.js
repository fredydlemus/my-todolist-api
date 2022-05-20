const express = require('express');
const TodoService = require('../services/todo.service');

const router = express.Router();
const service = new TodoService();

router.get('/', async (req, res) => {
    const todos = await service.getAll();
    res.json(todos);
});

router.post("/", async (req, res) => {
    const body = req.body;
    const newTodo = await service.create(body);
    res.status(201).json(newTodo);
});

module.exports = router;