const express = require(express);
const router = express.Router();
const Criminals = require('../models/criminals.js');

router.get('/', (req, res) => {
  Criminals.find({}, (error, foundCriminal) => {
    res.json(foundCriminal)
  })
})

router.post('/', (req, res) => {
  Criminals.create(req.body, (err, createdCriminal) => {
    res.json(createdCriminal)
  })
})

router.delete('/:id', (req,res) => {
  Criminals.findByIdAndRemove(req.params.id, (error, deletedCriminal) => {
    res.json(deletedCriminal)
  })
})

router.put('/:id', (req, res) => {
  Criminals.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCrimals) => {
    res.json(updatedCrimals)
  })
})
module.exports = router;
