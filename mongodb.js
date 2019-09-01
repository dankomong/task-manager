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

  // db.collection('users').deleteMany({
  //   age: 23
  // }).then(result => console.log(result)).catch(error => console.log(error))

  db.collection('tasks').deleteOne({ description: "Clean the house" })
    .then(result => console.log(result)).catch(error => console.log(error))

});
