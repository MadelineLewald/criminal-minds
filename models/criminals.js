const mongoose = require('mongoose');

const criminalSchema = new mongoose.Schema({
  name: String,
  conviction: String,
  sentence: Number,
  image: String
})

const Criminal = mongoose.model('Jailbird', criminalSchema);

module.exports = Criminal;
