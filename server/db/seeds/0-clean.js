export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('excodes').del()
}
