const faker = require('community-faker');
const boom = require('@hapi/boom');

class TodoService{
    constructor(){
        this.todos = [];
    }

    async create(data){
        const newTodo = {
            id: faker.datatype.uuid(),
            ...data,
            completed: false,
            createdAt: new Date(),
        }

        this.todos.push(newTodo);
        return newTodo;
    }

    async getAll(){
        return this.todos;
    }
}

module.exports = TodoService;