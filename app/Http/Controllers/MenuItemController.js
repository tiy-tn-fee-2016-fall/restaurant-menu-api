'use strict';

const MenuItem = use('App/Model/MenuItem');
const attributes = ['name', 'description', 'price'];

class MenuItemController {

  * index(request, response) {
    const menuItems = yield MenuItem.with('category').fetch();

    response.jsonApi('MenuItem', menuItems);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
      menu_category_id: request.getRelationId('category'),
    };
    const menuItem = yield MenuItem.create(Object.assign({}, input, foreignKeys));

    response.jsonApi('MenuItem', menuItem);
  }

  * show(request, response) {
    const id = request.param('id');
    const menuItem = yield MenuItem.with('category').where({ id }).firstOrFail();

    response.jsonApi('MenuItem', menuItem);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
      menu_category_id: request.getRelationId(&#39;category&#39;),
    };

    const menuItem = yield MenuItem.with('category').where({ id }).firstOrFail();
    yield menuItem.update(Object.assign({}, input, foreignKeys));

    response.jsonApi('MenuItem', menuItem);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const menuItem = yield MenuItem.query().where({ id }).firstOrFail();
    yield menuItem.delete();

    response.status(204).send();
  }

}

module.exports = MenuItemController;
