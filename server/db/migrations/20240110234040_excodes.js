export async function up(knex) {
  return knex.schema.createTable('excodes', (table) => {
    table.uuid('id').defaultsTo(knex.fn.uuid()).primary
    table.string('abbr').unique()
    table.string('name')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('excodes')
}
