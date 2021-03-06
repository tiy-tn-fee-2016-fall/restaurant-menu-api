'use strict'

const Lucid = use('Lucid')

class MenuCategory extends Lucid {


  menuItems() {
    return this.hasMany('App/Model/MenuItem', 'id', 'menu_category_id');
  }
}

module.exports = MenuCategory
