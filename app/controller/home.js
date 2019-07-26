'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index.html');
  }

  async proxy() {
    const ctx = this.ctx;
    // use roadhog mock api first
    const url = this.app.config.assets.url + ctx.path + '?' + ctx.querystring;

    const res = await ctx.curl(url, {
      method: ctx.method,
      data: ctx.request.body,
      dataType: 'application/json',
    });
    ctx.body = res.data;
    ctx.status = res.status;
  }
}

module.exports = HomeController;
