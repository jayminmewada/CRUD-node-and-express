console.log('May Node be with you');

const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const connectionString = "mongodb+srv://JayminMewada:Jaymin11@cluster0.pmfjkt0.mongodb.net/?retryWrites=true&w=majority";
const app = express();

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
       const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')
        console.log('Connected to Database')
        app.use(express.static('public'))
      
        app.set('view engine', 'ejs')
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())
        app.put('/quotes', (req, res) => {
          console.log(req.body);
            quotesCollection.findOneAndUpdate(  { name:"Shakespeare"},
            {
              $set: {
                name: req.body.name,
                quote: req.body.quote
              }
            },
            {
             upsert: true
            }
          )
              .then(result => {
                console.log(result);
                res.json('Success')
               })
              .catch(error => console.error(error))
          })
        app.get('/', (req, res) => {
            db.collection('quotes').find().toArray()
              .then(results => {
                res.render('index.ejs', { quotes: results })
              })
              .catch(error => console.error(error))
                
            
        })
        app.delete('/quotes', (req, res) => {
          quotesCollection.deleteOne(
            { name: req.body.name }
          )
            .then(result => {
              if (result.deletedCount === 0) {
                return res.json('No quote to delete')
              }
              res.json(`Deleted Kabir quote`)
            })
            .catch(error => console.error(error))
        })
        app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
               })
                .catch(error => console.error(error))
        })
   
        app.listen(3000, function () { console.log('listening on 3000') })
    })
    .catch(console.error)
