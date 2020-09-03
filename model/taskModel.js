const db = require("../data/config")

function find(){
    return db("task")
}
function findById(id){
    return db("task")
            .where({id})
            .first()
}

function add(task){
    return db("task")
                .insert(task)
                .then(id => {
                    return findById(id[0])
                })
}

module.exports ={
    find,
    findById,
    add
}