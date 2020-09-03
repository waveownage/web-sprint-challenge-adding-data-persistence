const db = require("../data/config")

function find(){
    return db("project")
}

function findById(id){
    return db("project")
            .where({id})
            .first()
}

function add(project){
    return db("project")
                .insert(project)
                .then(id => {
                    return findById(id[0])
                })
}
module.exports ={
    find,
    findById,
    add
}