const db = require("../data/config")

function find(){
    return db("task")
    .join('project', 'project.id', 'task.project_id')
    .select(
      'project.name as project name',
      'project.description as project description',
      'task.description as task',
      'task.notes as task notes'
    );
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