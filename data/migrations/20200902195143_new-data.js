exports.up = async function(knex) {
    await knex.schema.createTable("resource", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.text("description")
    })
    
    await knex.schema.createTable("project", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
        table.text("description")
        table.boolean("completed").defaultTo(false)
    })
  
    await knex.schema.createTable("task", (table) => {
        table.increments("id")
        table.text("description").notNull()
        table.text("notes")
        table.boolean("completed").defaultTo(false)
        table.integer("project_id").references("id").inTable("project").onDelete("SET NULL").onUpdate("CASCADE")
    })
  
    await knex.schema.createTable("projects_resources", (table) => {
        table.integer("project_id").references("id").inTable("project").onDelete("SET NULL").onUpdate("CASCADE")
        table.integer("resource_id").references("id").inTable("resource").onDelete("SET NULL").onUpdate("CASCADE")
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("projects_resources")
    await knex.schema.dropTableIfExists("task")
    await knex.schema.dropTableIfExists("project")
    await knex.schema.dropTableIfExists("resource")
  };
