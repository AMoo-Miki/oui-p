/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

// Karma configuration
// Generated on Tue Jul 28 2015 16:29:51 GMT+0200 (CEST)
var webpack = require("webpack");
var path = require("path");

var CONTINUOUS_INTEGRATION = process.env.CONTINUOUS_INTEGRATION === "true";

module.exports = function(config) {
  config.set({
    frameworks: ["mocha", "sinon", "chai"],

    browsers: ["Firefox"],

    singleRun: CONTINUOUS_INTEGRATION,

    files: ["test/index.js"],

    preprocessors: {
      "test/index.js": ["webpack", "sourcemap"]
    },

    reporters: ["dots", "coverage"],

    webpack: {
      devtool: "inline-source-map",
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
              presets: ["airbnb"]
            }
          },
          {
            test: /\.jsx?$/,
            include: path.resolve(__dirname, "src"),
            loader: "isparta"
          },
          {
            test: /\.json$/,
            loader: "json-loader"
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify("test")
        })
      ],
      resolve: {
        extensions: ["", ".jsx", ".js"]
      },
      externals: {
        cheerio: "window",
        "react/addons": true,
        "react/lib/ExecutionEnvironment": true,
        "react/lib/ReactContext": true
      }
    },

    coverageReporter: {
      reporters: [
        { type: "text-summary" },
        { type: "html", dir: "coverage/" },
        { type: "lcov" }
      ]
    },

    webpackServer: {
      noInfo: true
    }
  });
};
