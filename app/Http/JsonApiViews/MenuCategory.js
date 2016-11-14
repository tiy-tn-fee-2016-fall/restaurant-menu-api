const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class MenuCategory extends JsonApiView {
  get attributes() {
    return ['name'];
  }

  items() {
    return this.hasMany('App/Http/JsonApiViews/MenuItem', {
      included: true,
      excludeRelation: 'menuCategory'
    });
  }

}

module.exports = MenuCategory;
