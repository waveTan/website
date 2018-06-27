'use strict';

/**
 * Team.js controller
 *
 * @description: A set of functions called "actions" for managing `Team`.
 */

module.exports = {

  /**
   * Retrieve team records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.team.fetchAll(ctx.query);
  },

  /**
   * Retrieve a team record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.team.fetch(ctx.params);
  },

  /**
   * Count team records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.team.count(ctx.query);
  },

  /**
   * Create a/an team record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.team.add(ctx.request.body);
  },

  /**
   * Update a/an team record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.team.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an team record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.team.remove(ctx.params);
  },

  /**
   * Add relation to a/an team record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.team.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an team record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.team.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an team record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.team.removeRelation(ctx.params, ctx.request.body);
  }
};
