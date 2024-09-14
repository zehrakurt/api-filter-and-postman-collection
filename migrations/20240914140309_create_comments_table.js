/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('comments', function(table){
table.increments('id').primary();
table.integer('post_id').unsigned().references('id').inTable('posts').onDelete('CASCADE');
table.text('content').notNullable();
table.string('commenter').notNullable();
table.timestamp('created_at').defaultTo(knex.fn.now())
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('comments');
};
