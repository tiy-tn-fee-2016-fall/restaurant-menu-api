'use strict';

const Schema = use('Schema');

class MenuItemSchema extends Schema {

  up() {
    this.create('menu_items', (table) => {
      table.increments();
      table.string('name');
      table.string('description');
      table.integer('price');
      table.integer('menu_category_id').references('menu_categories.id');
      table.timestamps();
    });
  }

  down() {
    this.drop('menu_items');
  }

}

module.exports = MenuItemSchema;
