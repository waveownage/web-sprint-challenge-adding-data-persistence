exports.seed = async function(knex) {
  await knex("task").insert([
    {description: "Learn Javascript", notes:"Coding Language", completed: false, project_id: 1},
  ])
};