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

  // db.collection('users').updateOne({
  //   _id: new ObjectID("5d671554e82cf3b96364764b")
  // }, {
  //   $set: {
  //     name: 'Mike'
  //   }
  // }).then(result => console.log(result)).catch(error => console.log(error))
  //
  // db.collection('users').updateOne({
  //   _id: new ObjectID("5d671554e82cf3b96364764b")
  // }, {
  //   $inc: {
  //     age: 1
  //   }
  // }).then(result => console.log(result)).catch(error => console.log(error))

  db.collection('tasks').updateMany({
    completed: false
  }, {
    $set: {
      completed: true
    }
  }).then(result => console.log(result)).catch(error => console.log(error))

});
