export async function seed(knex) {
  await knex('excodes').insert([
    { abbr: 'USD', name: 'United States Dollar' },
    { abbr: 'AUD', name: 'Australian Dollar' },
  ])
}
