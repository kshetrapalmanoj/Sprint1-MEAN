const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Developer } = require('../models/developer');

// => localhost:3000/developers/
router.get('/', (req, res) => {
    Developer.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retrieving Developers :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Developer.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retrieving Developer :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var dev = new Developer({
        name: req.body.name,
        email: req.body.email,
        office: req.body.office,
        salary: req.body.salary,
    });
    dev.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Developer Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var dev = {
        name: req.body.name,
        email: req.body.email,
        office: req.body.office,
        salary: req.body.salary,
    };
    Developer.findByIdAndUpdate(req.params.id, { $set: dev }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Developer Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Developer.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Developer Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
