const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class MenuItem extends JsonApiView {
  get attributes() {
    return ['name', 'description', 'price'];
  }

  menuCategory() {
    return this.belongsTo('App/Http/JsonApiViews/MenuCategory', {
      included: false,
      excludeRelation: 'items'
    });
  }

}

module.exports = MenuItem;
