'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.all('/api/*', controller.home.proxy);
  router.get('*', controller.home.index);
};
