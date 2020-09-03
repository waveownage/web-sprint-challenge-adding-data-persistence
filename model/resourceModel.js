const db = require("../data/config")

function find(){
    return db("resource")
}

function findById(id){
    return db("resource")
            .where({id})
            .first()
}

function add(resource){
    return db("resource")
                .insert(resource)
                .then(id => {
                    return findById(id[0])
                })
}


module.exports ={
    find,
    findById,
    add
}