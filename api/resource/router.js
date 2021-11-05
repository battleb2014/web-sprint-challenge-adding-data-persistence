const express = require('express');
const Resources = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Resources.getResources()
        .then(resources => {
            res.status(201).json(resources)
        })
        .catch(next)
})
router.post('/', (req, res, next) => {
    Resources.createResource(req.body)
        .then(newResource => {
            res.status(201).json(newResource)
        })
        .catch(next)
})

module.exports = router;