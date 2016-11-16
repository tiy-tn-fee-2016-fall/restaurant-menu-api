'use strict'

const Lucid = use('Lucid')

class MenuItem extends Lucid {


  menuCategory() {
    return this.belongsTo('App/Model/MenuCategory', 'id', 'menu_category_id');
  }
}

module.exports = MenuItem
