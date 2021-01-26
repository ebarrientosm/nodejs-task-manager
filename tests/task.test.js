const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')
const {userOne, userTwo, taskOne, taskThree, setupDatabase} = require('./fixtures/db')
const User = require('../src/models/user')

beforeEach( setupDatabase )

test('Should create task for user', async () => {
    const response = await request(app)
    .post('/tasks')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
        description: 'From my test'
    })
    .expect(201)

    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
    expect(task.completed).toEqual(false)
})

test('Should return all tasks from user one', async () => {
    const response = await request(app)
    .get('/tasks')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .expect(200)

    expect(response.body.length).toEqual(2)
})

test('Should not delete other users tasks', async () => { 
    const response = await request(app)
    .delete(`/tasks/${taskThree._id}`)
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .expect(404)

    const task = await Task.findById(taskThree._id)
    
    expect(task).not.toBeNull()
})