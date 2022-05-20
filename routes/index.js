const todosRouter = require('./todos.router');
const express = require('express');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);

    router.use('/todos', todosRouter);
}

module.exports = routerApi;