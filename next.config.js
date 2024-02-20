const withNextIntl = require('next-intl/plugin')();
const stylexPlugin = require('@stylexjs/nextjs-plugin');
const path = require('path');

const babelrc = require('./babelrc.js');
const plugins = babelrc.plugins;
const [_name, options] = plugins.find(
  (plugin) => Array.isArray(plugin) && plugin[0] === '@stylexjs/babel-plugin',
);
const rootDir = options.unstable_moduleResolution.rootDir ?? __dirname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@stylexjs/open-props'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = stylexPlugin({
  aliases: {
    '@/*': [path.join(__dirname, '*')],
  },
  rootDir,
  useCSSLayers: true,
})(withNextIntl(nextConfig));
