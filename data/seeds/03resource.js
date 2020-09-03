exports.seed = async function(knex) {
  await knex("resource").insert([
    {name: "Computer", description: "Used to access coding programs"}
  ])
};
