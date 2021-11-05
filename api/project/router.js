const express = require('express');
const Projects = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Projects.getProjects()
        .then(projects => {
            res.status(201).json(projects)
        })
        .catch(next)
})
router.post('/', (req, res, next) => {
    Projects.createProject(req.body)    
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})

module.exports = router;