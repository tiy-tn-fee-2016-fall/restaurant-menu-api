const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class MenuCategory extends JsonApiView {
  get attributes() {
    return ['name'];
  }

  'menuItems'() {
    return this.hasMany('App/Http/JsonApiViews/MenuItem', {
      type: 'menu-item',
      included: true,
      excludeRelation: 'category',
    });
  }

}

module.exports = MenuCategory;
