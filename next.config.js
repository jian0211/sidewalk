const stylexPlugin = require('@stylexjs/nextjs-plugin');
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */

const nextConfig = {};

module.exports = withNextIntl(
  stylexPlugin({
    rootDir: __dirname,
  })(nextConfig),
);
