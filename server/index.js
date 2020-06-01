const express = require('express');
const app = express();
const http = require('http').createServer(app);

const PORT = process.env.PORT || 8090;
const {getClient, getDB, createObjectId} = require('./db');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('server is up and running');
});

app.post('/cards', (req, res) => {
  const db = getDB();
  let data = req.body;
    if(!data){
      res.status(400).end();
      return;
    }
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

app.delete('/cards/:id/', (req,res) =>{
  let cardId = req.params.id;
  const db = getDB();
  db.collection('cards')
    .deleteOne({_id: createObjectId(cardId)})
    .then(data => {
      res.status(200).send(data);
    })
    .catch(e => {
      res.status(500).end();
    });
})

app.put('/cards/:id/', (req,res) =>{
  let data = req.body;
  let id = req.params.id;
  if(!data){
    res.status(400).end();
    return;
  }
  const db = getDB();
  db.collection('cards')
  .updateOne({_id: createObjectId(id)},{$set:{card: data.card}})
  .then(data => {
    res.status(200).send(data);
  })
  .catch(err => {
    res.status(500).send(err)
  })
})


http.listen(PORT, () => {
  console.log("servern har startat" +`${PORT}`);
})
