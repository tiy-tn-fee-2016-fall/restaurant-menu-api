const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class MenuItem extends JsonApiView {
  get attributes() {
    return ['name', 'description', 'price'];
  }

  category() {
    return this.belongsTo('App/Http/JsonApiViews/MenuCategory', {
      included: true,
      excludeRelation: 'menuItems'
    });
  }

}

module.exports = MenuItem;
