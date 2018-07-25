'use strict';

/**
 * Documentcategories.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

// Strapi utilities.
const utils = require('strapi-hook-bookshelf/lib/utils/');

module.exports = {

  /**
   * Promise to fetch all documentcategories.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('documentcategories', params);
    // Select field to populate.
    const populate = Documentcategories.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Documentcategories.query(function(qb) {
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
   * Promise to fetch a/an documentcategories.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Documentcategories.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Documentcategories.forge(_.pick(params, 'id')).fetch({
      withRelated: populate
    });
  },

  /**
   * Promise to count a/an documentcategories.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('documentcategories', params);

    return Documentcategories.query(function(qb) {
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
   * Promise to add a/an documentcategories.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Documentcategories.associations.map(ast => ast.alias));
    const data = _.omit(values, Documentcategories.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Documentcategories.forge(data).save();

    // Create relational data and return the entry.
    return Documentcategories.updateRelations({ id: entry.id , values: relations });
  },

  /**
   * Promise to edit a/an documentcategories.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Documentcategories.associations.map(ast => ast.alias));
    const data = _.omit(values, Documentcategories.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = Documentcategories.forge(params).save(data, { path: true });

    // Create relational data and return the entry.
    return Documentcategories.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an documentcategories.
   *
   * @return {Promise}
   */

  remove: async (params) => {
    await Promise.all(
      Documentcategories.associations.map(association =>
        Documentcategories.forge(params)[association.alias]().detach()
      )
    );

    return Documentcategories.forge(params).destroy();
  }
};
