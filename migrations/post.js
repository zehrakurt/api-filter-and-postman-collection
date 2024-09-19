const knex = require('./knex');

const Post = {
  getAll: () => {
    return knex('post').whereNull('deleted_at');
  },
  
  create: (post) => {
    return knex('post').insert(post).returning('*');
  }
};

module.exports = Post;