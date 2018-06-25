'use strict';

/**
 * Partners.js controller
 *
 * @description: A set of functions called "actions" for managing `Partners`.
 */

module.exports = {

  /**
   * Retrieve partners records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.partners.fetchAll(ctx.query);
  },

  /**
   * Retrieve a partners record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.partners.fetch(ctx.params);
  },

  /**
   * Count partners records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.partners.count(ctx.query);
  },

  /**
   * Create a/an partners record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.partners.add(ctx.request.body);
  },

  /**
   * Update a/an partners record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.partners.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an partners record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.partners.remove(ctx.params);
  },

  /**
   * Add relation to a/an partners record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.partners.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an partners record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.partners.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an partners record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.partners.removeRelation(ctx.params, ctx.request.body);
  }
};
