'use strict'

const Factory = use('Factory')

const categories = [
  {
    name: 'Small Plates',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    name: 'Main Courses',
    created_at: new Date(),
    updated_at: new Date(),
  }
];

const menuItems = [
  {
    name: 'Poke',
    created_at: new Date(),
    updated_at: new Date(),
    price: 11,
    description: 'Tuna, Sesame Chicharron, Chili Oil, Apple, Raddish',
    menu_category_id: 1,
  },
  {
    name: 'Pork Gyoza',
    created_at: new Date(),
    updated_at: new Date(),
    price: 7,
    description: 'Contry Ponzu',
    menu_category_id: 1,
  },

  {
    name: 'Super Salad',
    created_at: new Date(),
    updated_at: new Date(),
    price: 6,
    description: 'Cabbage, Bacon, Egg, Nori Green Goddess',
    menu_category_id: 2,
  },
  {
    name: 'Buttered Noodles',
    created_at: new Date(),
    updated_at: new Date(),
    price: 9,
    description: 'Miso Butter, Pepper, Hand Pulled Noodles',
    menu_category_id: 2,
  },
  {
    name: 'Hot Chicken',
    created_at: new Date(),
    updated_at: new Date(),
    price: 12,
    description: 'Fried Chicken Breast, Nashville Spices',
    menu_category_id: 2,
  },
]

const Db = use('Database');

class MenuSeeder {

  * run () {
    yield Db.table('menu_categories').insert(categories);
    yield Db.table('menu_items').insert(menuItems);
  }

}

module.exports = MenuSeeder
