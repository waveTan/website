'use strict';

/**
 * Contact.js controller
 *
 * @description: A set of functions called "actions" for managing `Contact`.
 */

module.exports = {

  /**
   * Retrieve contact records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.contact.fetchAll(ctx.query);
  },

  /**
   * Retrieve a contact record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.contact.fetch(ctx.params);
  },

  /**
   * Count contact records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.contact.count(ctx.query);
  },

  /**
   * Create a/an contact record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.contact.add(ctx.request.body);
  },

  /**
   * Update a/an contact record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.contact.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an contact record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.contact.remove(ctx.params);
  },

  /**
   * Add relation to a/an contact record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.contact.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an contact record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.contact.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an contact record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.contact.removeRelation(ctx.params, ctx.request.body);
  }
};
