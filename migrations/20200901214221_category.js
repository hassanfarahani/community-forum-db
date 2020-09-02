
exports.up = function(knex) {
    return knex.schema.createTable('category', table => {
        table.increments()
        table.text('title').notNullable()
        table.text('description').notNullable()
        table.text('image_url')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('category')
};


// we can not insert it into db unless it has title & description