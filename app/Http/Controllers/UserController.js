'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');
const attributes = ['email', 'password'];

class UserController {

  * store(request, response) {
    const { email, password } = request.jsonApi.getAttributesSnakeCase(attributes);

    const user = yield User.create({
      email,
      password: yield Hash.make(password),
    });

    response.jsonApi('User', user);
  }

}

module.exports = UserController;
