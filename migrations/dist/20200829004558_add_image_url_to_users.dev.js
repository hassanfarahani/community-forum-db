"use strict";

exports.up = function (knex) {
  return knex.schema.table('users', function (table) {
    table.text('image_url').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('image_url');
  });
};