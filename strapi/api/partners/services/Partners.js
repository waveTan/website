'use strict';

/**
 * Partners.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

// Strapi utilities.
const utils = require('strapi-bookshelf/lib/utils/');

module.exports = {

  /**
   * Promise to fetch all partners.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('partners', params);
    // Select field to populate.
    const populate = Partners.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Partners.query(function(qb) {
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
   * Promise to fetch a/an partners.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Partners.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Partners.forge(_.pick(params, 'id')).fetch({
      withRelated: populate
    });
  },

  /**
   * Promise to count a/an partners.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('partners', params);

    return Partners.query(function(qb) {
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
   * Promise to add a/an partners.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Partners.associations.map(ast => ast.alias));
    const data = _.omit(values, Partners.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Partners.forge(data).save();

    // Create relational data and return the entry.
    return Partners.updateRelations({ id: entry.id , values: relations });
  },

  /**
   * Promise to edit a/an partners.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Partners.associations.map(ast => ast.alias));
    const data = _.omit(values, Partners.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = Partners.forge(params).save(data, { path: true });

    // Create relational data and return the entry.
    return Partners.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an partners.
   *
   * @return {Promise}
   */

  remove: async (params) => {
    await Promise.all(
      Partners.associations.map(association =>
        Partners.forge(params)[association.alias]().detach()
      )
    );

    return Partners.forge(params).destroy();
  }
};
