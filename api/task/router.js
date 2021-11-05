const express = require('express');
const Tasks = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Tasks.getTasks()
        .then(tasks => {
            res.status(201).json(tasks)
        })
        .catch(next)
})
router.post('/', async (req, res, next) => {
    try {
        const newTask = await Tasks.create(req.body)
        res.json(newTask)
    } catch (err) {
        next(err)
    }
})

module.exports = router;