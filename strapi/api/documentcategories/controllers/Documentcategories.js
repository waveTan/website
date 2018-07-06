'use strict';

/**
 * Documentcategories.js controller
 *
 * @description: A set of functions called "actions" for managing `Documentcategories`.
 */

module.exports = {

  /**
   * Retrieve documentcategories records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.documentcategories.fetchAll(ctx.query);
  },

  /**
   * Retrieve a documentcategories record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.documentcategories.fetch(ctx.params);
  },

  /**
   * Count documentcategories records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.documentcategories.count(ctx.query);
  },

  /**
   * Create a/an documentcategories record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.documentcategories.add(ctx.request.body);
  },

  /**
   * Update a/an documentcategories record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.documentcategories.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an documentcategories record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.documentcategories.remove(ctx.params);
  },

  /**
   * Add relation to a/an documentcategories record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.documentcategories.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an documentcategories record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.documentcategories.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an documentcategories record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.documentcategories.removeRelation(ctx.params, ctx.request.body);
  }
};
