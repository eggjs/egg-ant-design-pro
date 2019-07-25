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

    let params = {
      method: this.ctx.method,
      dataType: 'json'
    };
    let method = params.method.toLowerCase();
    if (method === 'put' || method === 'post') {
      params.data = ctx.request.body
    }
    const res = await this.ctx.curl(url, params);
    
    ctx.body = res.data;
    ctx.status = res.status;
  }
}

module.exports = HomeController;
