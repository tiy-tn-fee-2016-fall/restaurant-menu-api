'use strict';

const MenuCategory = use('App/Model/MenuCategory');
const attributes = ['name'];

class MenuCategoryController {

  * index(request, response) {
    const menuCategories = yield MenuCategory.with('items').fetch();

    response.jsonApi('MenuCategory', menuCategories);
  }

  * store(request, response) {
    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };
    const menuCategory = yield MenuCategory.create(Object.assign({}, input, foreignKeys));

    response.jsonApi('MenuCategory', menuCategory);
  }

  * show(request, response) {
    const id = request.param('id');
    const menuCategory = yield MenuCategory.with('items').where({ id }).firstOrFail();

    response.jsonApi('MenuCategory', menuCategory);
  }

  * update(request, response) {
    const id = request.param('id');
    request.jsonApi.assertId(id);

    const input = request.jsonApi.getAttributesSnakeCase(attributes);
    const foreignKeys = {
    };

    const menuCategory = yield MenuCategory.with('items').where({ id }).firstOrFail();
    yield menuCategory.update(Object.assign({}, input, foreignKeys));

    response.jsonApi('MenuCategory', menuCategory);
  }

  * destroy(request, response) {
    const id = request.param('id');

    const menuCategory = yield MenuCategory.query().where({ id }).firstOrFail();
    yield menuCategory.delete();

    response.status(204).send();
  }

}

module.exports = MenuCategoryController;
