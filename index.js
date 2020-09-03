const express = require("express")
const helmet = require("helmet")

const projectRouter = require("./router/projectRouter")
const resourceRouter = require("./router/resourceRouter")
const taskRouter = require("./router/taskRouter")

const server = express()
const port = 5000

server.use(helmet())
server.use(express.json())

server.use(projectRouter)
server.use(resourceRouter)
server.use(taskRouter)

server.use((err,req,res,next) => {
    res.status(500).json({
        message: "Something went wrong"
    })
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})