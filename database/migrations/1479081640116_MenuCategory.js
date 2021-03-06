'use strict';

const Schema = use('Schema');

class MenuCategorySchema extends Schema {

  up() {
    this.create('menu_categories', (table) => {
      table.increments();
      table.string('name');
      
      table.timestamps();
    });
  }

  down() {
    this.drop('menu_categories');
  }

}

module.exports = MenuCategorySchema;
