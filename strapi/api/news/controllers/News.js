'use strict';

/**
 * News.js controller
 *
 * @description: A set of functions called "actions" for managing `News`.
 */

module.exports = {

  /**
   * Retrieve news records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.news.fetchAll(ctx.query);
  },

  /**
   * Retrieve a news record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.news.fetch(ctx.params);
  },

  /**
   * Count news records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.news.count(ctx.query);
  },

  /**
   * Create a/an news record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.news.add(ctx.request.body);
  },

  /**
   * Update a/an news record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.news.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an news record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.news.remove(ctx.params);
  },

  /**
   * Add relation to a/an news record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.news.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an news record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.news.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an news record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.news.removeRelation(ctx.params, ctx.request.body);
  }
};
