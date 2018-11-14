'use strict';

/**
 * Userprofile.js controller
 *
 * @description: A set of functions called "actions" for managing `Userprofile`.
 */

module.exports = {

  /**
   * Retrieve userprofile records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.userprofile.search(ctx.query);
    } else {
      return strapi.services.userprofile.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a userprofile record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.userprofile.fetch(ctx.params);
  },

  /**
   * Count userprofile records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.userprofile.count(ctx.query);
  },

  /**
   * Create a/an userprofile record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.userprofile.add(ctx.request.body);
  },

  /**
   * Update a/an userprofile record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.userprofile.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an userprofile record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.userprofile.remove(ctx.params);
  }
};
