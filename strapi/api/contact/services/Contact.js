'use strict';

/**
 * Contact.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

// Strapi utilities.
const utils = require('strapi-hook-bookshelf/lib/utils/');

module.exports = {

  /**
   * Promise to fetch all contacts.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('contact', params);
    // Select field to populate.
    const populate = Contact.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Contact.query(function(qb) {
      _.forEach(filters.where, (where, key) => {
        if (_.isArray(where.value)) {
          for (const value in where.value) {
            qb[value ? 'where' : 'orWhere'](key, where.symbol, where.value[value])
          }
        } else {
          qb.where(key, where.symbol, where.value);
        }
      });

      if (filters.sort) {
        qb.orderBy(filters.sort.key, filters.sort.order);
      }

      qb.offset(filters.start);
      qb.limit(filters.limit);
    }).fetchAll({
      withRelated: populate
    });
  },

  /**
   * Promise to fetch a/an contact.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Contact.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Contact.forge(_.pick(params, 'id')).fetch({
      withRelated: populate
    });
  },

  /**
   * Promise to count a/an contact.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('contact', params);

    return Contact.query(function(qb) {
      _.forEach(filters.where, (where, key) => {
        if (_.isArray(where.value)) {
          for (const value in where.value) {
            qb[value ? 'where' : 'orWhere'](key, where.symbol, where.value[value])
          }
        } else {
          qb.where(key, where.symbol, where.value);
        }
      });
    }).count();
  },

  /**
   * Promise to add a/an contact.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Contact.associations.map(ast => ast.alias));
    const data = _.omit(values, Contact.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Contact.forge(data).save();

    // Create relational data and return the entry.
    return Contact.updateRelations({ id: entry.id , values: relations });
  },

  /**
   * Promise to edit a/an contact.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Contact.associations.map(ast => ast.alias));
    const data = _.omit(values, Contact.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = Contact.forge(params).save(data, { path: true });

    // Create relational data and return the entry.
    return Contact.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an contact.
   *
   * @return {Promise}
   */

  remove: async (params) => {
    await Promise.all(
      Contact.associations.map(association =>
        Contact.forge(params)[association.alias]().detach()
      )
    );

    return Contact.forge(params).destroy();
  }
};
