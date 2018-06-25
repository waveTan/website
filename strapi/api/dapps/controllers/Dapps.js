'use strict';

/**
 * Dapps.js controller
 *
 * @description: A set of functions called "actions" for managing `Dapps`.
 */

module.exports = {

  /**
   * Retrieve dapps records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.dapps.fetchAll(ctx.query);
  },

  /**
   * Retrieve a dapps record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.dapps.fetch(ctx.params);
  },

  /**
   * Count dapps records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.dapps.count(ctx.query);
  },

  /**
   * Create a/an dapps record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.dapps.add(ctx.request.body);
  },

  /**
   * Update a/an dapps record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.dapps.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an dapps record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.dapps.remove(ctx.params);
  },

  /**
   * Add relation to a/an dapps record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.dapps.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an dapps record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.dapps.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an dapps record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.dapps.removeRelation(ctx.params, ctx.request.body);
  }
};
