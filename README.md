# Restaurant Api

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

To deploy this JSON API, click the above deploy button!

URLS:

### `/menu-categories`

This is a full JSON API Specification Compatible API for a `menu-category` model with the following properites:

- name - String
- menuItems - Has Many `menu-item`

### `/menu-items`

This is a full JSON API Specification Compatible API for a `menu-item` model with the following properites:

- name - String
- description - String
- price - Number
- menuCategory - Belongs To `menu-category`
