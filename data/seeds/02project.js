exports.seed = async function(knex) {
  await knex("project").insert([
    {name:"Sprint-Challenge", description: "Used to gauge student mastery",completed: false},
  ])
};
