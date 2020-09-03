const express = require("express")
const Project = require("../model/projectModel")

const router = express.Router()

router.get("/projects", async (req, res, next) => {
    try{
        const projects = await Project.find()
        res.json(projects)
    } catch(err){
        next(err)
    }
})

router.post('/projects', (req, res, next) => {
    Project.add(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      next(err)
    });
  });


module.exports = router