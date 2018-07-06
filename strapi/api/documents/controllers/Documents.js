'use strict';

/**
 * Documents.js controller
 *
 * @description: A set of functions called "actions" for managing `Documents`.
 */

module.exports = {

  /**
   * Retrieve documents records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.documents.fetchAll(ctx.query);
  },

  /**
   * Retrieve a documents record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.documents.fetch(ctx.params);
  },

  /**
   * Count documents records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.documents.count(ctx.query);
  },

  /**
   * Create a/an documents record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.documents.add(ctx.request.body);
  },

  /**
   * Update a/an documents record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.documents.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an documents record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.documents.remove(ctx.params);
  },

  /**
   * Add relation to a/an documents record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.documents.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an documents record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.documents.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an documents record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.documents.removeRelation(ctx.params, ctx.request.body);
  }
};
