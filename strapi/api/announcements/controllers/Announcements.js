'use strict';

/**
 * Announcements.js controller
 *
 * @description: A set of functions called "actions" for managing `Announcements`.
 */

module.exports = {

  /**
   * Retrieve announcements records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.announcements.fetchAll(ctx.query);
  },

  /**
   * Retrieve a announcements record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.announcements.fetch(ctx.params);
  },

  /**
   * Count announcements records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.announcements.count(ctx.query);
  },

  /**
   * Create a/an announcements record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.announcements.add(ctx.request.body);
  },

  /**
   * Update a/an announcements record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.announcements.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an announcements record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.announcements.remove(ctx.params);
  },

  /**
   * Add relation to a/an announcements record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.announcements.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an announcements record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.announcements.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an announcements record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.announcements.removeRelation(ctx.params, ctx.request.body);
  }
};
