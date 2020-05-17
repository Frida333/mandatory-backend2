const express = require('express');
const app = express();
const http = require('http').createServer(app);


const PORT = process.env.PORT || 8090;
const {getClient, getDB, createObjectId} = require('./db');
const {addCard} = require('./cards');

app.use(express.json());

/*db.collection('cards').insertOne({
    card:{
      title: data.title,
      description: data.description,
      time: data.time,
     }
  });
*/

app.get('/', (req, res) => {
  res.send('server is up and running');
});

app.post('/cards', (req, res) => {
  const db = getDB();
  let data = req.body;
  db.collection('cards').find({title: data.title}).toArray()
    db.collection('cards')
    .insertOne(data)
    .then(result => {
      res.status(201).send(data)
    })
    .catch(e => {
      res.status(500).end();
    });
})

app.get('/cards', (req, res) => {
  const db = getDB();

  db.collection('cards')
    .find({})
    .toArray()
    .then(data => {
      res.send(data);
    })
    .catch(e =>{
      res.status(500).end()
    })
})







http.listen(PORT, () => {
  console.log("servern har startat" +`${PORT}`);
})
