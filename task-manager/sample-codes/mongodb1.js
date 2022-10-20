// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'task-manager'

const client = new MongoClient(connectionURL)

async function run() {
    try {
        await client.connect()
    }
}


// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     console.log("Connected successfully")
//     const db = client.db(databaseName)

    // Database with callback functions
    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users')
    //     }
    //     console.log(result)
    // })

    // db.collection('users').insertMany({
    //     name: 'Jen',
    //     age: 26
    // },
    //     {
    //         name: 'Gunther',
    //         age: 28
    //     })


    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').InsertOne({
    //     description: "Clean the house"
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
})