const mongoose = require('mongoose');

const jailbirdSchema = new mongoose.Schema({
  name: String,
  conviction: String,
  sentence: String,
  image: String
})

const Jailbird = mongoose.model('Jailbird', jailbirdSchema);

module.exports = Jailbird;
