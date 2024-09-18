const knex=require('./knex')

const Category ={
    getAll:()=>{
        return knex ('categories').whereNull('deleted_at')
    },
    getById:(id)=>{
        return knex ('categories').where({id}).first()
    },
    create: (category) => {
        console.log('Creating category:', category); 
        return knex('categories')
          .insert(category)
          .returning('*')
          .then(result => {
            console.log('Insert result:', result); 
            return result;
          })
          .catch(error => {
            console.error('Knex error:', error); 
            throw error;
          });
    },
    
    update:(id,category)=>{
        return knex('categories').where({id}).update(category).returning('+')
    },
    delete:(id)=>{
        return knex ('categories').where({id}).update({deleted_at:new Date()}).returning('+')
    },
}

module.exports=Category