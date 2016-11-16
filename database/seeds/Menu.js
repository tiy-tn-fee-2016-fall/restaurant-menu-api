'use strict'

const Factory = use('Factory')

const categories = [
  {
    name: 'Small Plates',
  },
  {
    name: 'Main Courses',
  }
];

const menuItems = [
  {
    name: 'Poke',
    price: 11,
    description: 'Tuna, Sesame Chicharron, Chili Oil, Apple, Raddish',
    menu_category_id: 1,
  },
  {
    name: 'Pork Gyoza',
    price: 7,
    description: 'Contry Ponzu',
    menu_category_id: 1,
  },

  {
    name: 'Super Salad',
    price: 6,
    description: 'Cabbage, Bacon, Egg, Nori Green Goddess',
    menu_category_id: 2,
  },
  {
    name: 'Buttered Noodles',
    price: 9,
    description: 'Miso Butter, Pepper, Hand Pulled Noodles',
    menu_category_id: 2,
  },
  {
    name: 'Hot Chicken',
    price: 12,
    description: 'Fried Chicken Breast, Nashville Spices',
    menu_category_id: 2,
  },
]

const Db = use('Database');

class MenuSeeder {

  * run () {
    Db.table('menu_categories').insert(categories);
    Db.table('menu_items').insert(menuItems);
  }

}

module.exports = MenuSeeder
