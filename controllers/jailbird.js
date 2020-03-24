const express = require('express');
const router = express.Router();
const Jailbirds = require('../models/jailbird.js');

router.get('/', (req, res) => {
  Jailbirds.find({}, (error, foundJailbird) => {
    res.json(foundJailbird)
  })
})

router.post('/', (req, res) => {
  Jailbirds.create(req.body, (err, createdJailbird) => {
    console.log(err);
    console.log(createdJailbird);
    res.json(createdJailbird)
  })
})

router.delete('/:id', (req,res) => {
  Jailbirds.findByIdAndRemove(req.params.id, (error, deletedJailbird) => {
    res.json(deletedJailbird)
  })
})

router.put('/:id', (req, res) => {
  Jailbirds.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCrimals) => {
    res.json(updatedCrimals)
  })
})
module.exports = router;
