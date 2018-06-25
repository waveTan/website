'use strict';

/**
 * Nulspartners.js controller
 *
 * @description: A set of functions called "actions" for managing `Nulspartners`.
 */

module.exports = {

  /**
   * Retrieve nulspartners records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.nulspartners.fetchAll(ctx.query);
  },

  /**
   * Retrieve a nulspartners record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.nulspartners.fetch(ctx.params);
  },

  /**
   * Count nulspartners records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.nulspartners.count(ctx.query);
  },

  /**
   * Create a/an nulspartners record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.nulspartners.add(ctx.request.body);
  },

  /**
   * Update a/an nulspartners record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.nulspartners.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an nulspartners record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.nulspartners.remove(ctx.params);
  },

  /**
   * Add relation to a/an nulspartners record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.nulspartners.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an nulspartners record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.nulspartners.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an nulspartners record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.nulspartners.removeRelation(ctx.params, ctx.request.body);
  }
};
