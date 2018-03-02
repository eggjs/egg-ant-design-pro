# Egg Example for Ant Design Pro

A full example with frontend([Ant Design Pro]) and backend([Egg.js]).

## Development

Egg has integrated with assets tools by [egg-view-assets], so you don't have to start another command for serving assets.

```bash
$ npm run dev
```

`npm run dev` will start a dev server for assets that configured in `config.assets.devServer`.

## Deployment

Assets should be compiled before shipping.

```bash
$ npm run build
```

It will be generated to `app/public` that hosted by Egg, due to the configration of ``.webpackrc`.

Start Egg with prod environment.

```bash
$ npm start
```

### Deploy assets to CDN

TODO

## How to Contribute

Please let us know how can we help. Do check out [issues](https://github.com/eggjs/egg/issues) for bug reports or suggestions first.

To become a contributor, please follow our [contributing guide](CONTRIBUTING.md).

## License

[MIT](LICENSE)

[Egg.js]: https://eggjs.org
[Ant Design Pro]: https://github.com/ant-design/ant-design-pro
[egg-view-assets]: https://github.com/eggjs/egg-view-assets
