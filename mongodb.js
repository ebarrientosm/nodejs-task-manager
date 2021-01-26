// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongo.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'test-database'

// const id = new ObjectID() 

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    //REMOVE

    // db.collection('users').deleteOne({
    //     _id: new ObjectID('5edd3ff3c78abc08c4c0455f')
    // }).then( result => {
    //     console.log(result)
    // }).catch( error => {
    //     console.log(error)
    // })

        //check deleteMany()

    //UPDATE

    // db.collection('users').updateOne({ 
    //     _id: new ObjectID('5edd3ff3c78abc08c4c0455f')
    //  }, {
    //     $inc: {
    //         age: 2
    //     }
    //  })
    //  .then( response => {
    //     console.log(response)
    //  })
    //  .catch( error => {
    //     console.log(error)
    //  }) 
        
        //check updateMany()

    //READ

    // db.collection('tasks').findOne({ _id: new ObjectID('5edd40b707e23b307c41baaf') }, (error, task) => {
    //     if (error) {
    //         console.log('There was an error')
    //     }

    //     console.log('last one', task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log('incompleted', tasks)
    // })
    
    // db.collection('users').findOne({ _id: ObjectID('5edd3a7377357e3f74d2dfa2') }, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }
    
    //     console.log(user)
    // })


    // CREATE

    // db.collection('users').find({ age: 33 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 33 }).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('users').insertOne({

    //     name: 'Edwin',
    //     age: 25

    // }, (error, result) => {

    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)

    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Julio',
    //         age: 24
    //     },
    //     {
    //         name: 'Nancy',
    //         age: 33
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)

    // })
 
})