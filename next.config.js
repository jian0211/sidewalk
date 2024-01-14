const withNextIntl = require('next-intl/plugin')();
const stylexPlugin = require('@stylexjs/nextjs-plugin');

const babelrc = require('./babelrc.js');
const plugins = babelrc.plugins;
const [_name, options] = plugins.find(
  (plugin) => Array.isArray(plugin) && plugin[0] === '@stylexjs/babel-plugin',
);
const rootDir = options.unstable_moduleResolution.rootDir ?? __dirname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@stylexjs/open-props'],
};

module.exports = stylexPlugin({
  rootDir,
  useCSSLayers: true,
})(withNextIntl(nextConfig));
