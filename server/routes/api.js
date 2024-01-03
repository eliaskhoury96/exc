const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}).then( function (people) {
        res.send(people)
    })
})
router.post('/person', function (req, res) {
    const { firstName, lastName, age } = req.body;
    const p1 = new Person ({firstName, lastName, age })
    p1.saved()
    res.sendStatus(201);
})
router.patch('/person/age 80/:id', function (req, res) {
    const { id } = req.params;
   PersonModel.setAgeById(id, 80);
   res.sendStatus(204);
})
router.delete('/apocalypse', (req, res) =>{
   PersonModel.deleteAll();
   res.sendStatus(204);
})


module.exports = router