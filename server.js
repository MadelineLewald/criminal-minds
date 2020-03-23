const express = require('express')
const app = express();
const mongoose = require('mongoose')

app.get('/', (req, res) => {
  res.send('Hello world')
} )



app.listen(3001, () => {
  console.log('listening');
})

mongoose.connect(
    'mongodb://localhost:27017/meancrud',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})
