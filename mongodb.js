// CRUD

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database');
  }

  const db = client.db(database);

  // db.collection('users').insertOne({
  //   name: 'Daniel',
  //   age: 23
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user.');
  //   }
  //
  //   console.log(result.ops);
  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Jen',
  //     age: 22
  //   },
  //   {
  //     name: 'Brad',
  //     age: 23
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents.');
  //   }
  //
  //   console.log(result.ops);
  // })

  db.collection('tasks').insertMany([
    {
      description: 'Clean the house',
      completed: true
    },
    {
      description: 'Renew inspection',
      completed: false
    },
    {
      description: 'Pot plants',
      completed: false
    }
  ], (error, result) => {
    if (error) {
      return console.log('Unable to insert tasks!');
    }

    console.log(result.ops);
  })

});
