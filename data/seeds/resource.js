exports.seed = async function(knex) {
  await knex("resource").insert([
    {name: "Labtop",description: "Used to access coding programs"},
  ])
};
