// CRUD

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';

// const id = new ObjectID();

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database');
  }

  const db = client.db(database);

  // db.collection('users').findOne({ name: 'Jane', age: 1 }, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch');
  //   }
  //
  //   console.log(user);
  // })
  //
  // db.collection('users').find({  age: 23 }).toArray((error, users) => {
  //   console.log(users);
  // })

  db.collection('tasks').findOne({ _id: ObjectID("5d6717d9fe7b84bada300b69") }, (error, task) => {
    if (error) {
      return console.log('Unable to find task.');
    }

    console.log(task);
  })

  db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    if (error) {
      return console.log('Unable to find task(s)');
    }

    console.log(tasks);
  })

});
