const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const path = require('path');
const stylelint = require('stylelint');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = (nodeEnv === 'production');

const publicFolder = 'dist';

// Additional configs for development mode
const devEntry = isProd ? [] : [
  'webpack-dev-server/client?http://localhost:3000/',
  'webpack/hot/only-dev-server'
];
const devLoaders = isProd ? [] : [
  'react-hot'
];
const devConfig = isProd ? {} : {
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api/**', '/auth/**'],
        target: 'http://localhost:3000/',
        secure: false
      }
    ]
  }
};

const INCLUDED_PATHS = [path.join(__dirname, 'app')];
const ESLINT_EXCLUDE = [path.join(__dirname, 'app', 'js', 'components', '_common')];
const INCLUDED_MATERIAL_DESIGN_ICON = path.join(__dirname, 'node_modules/material-design-icons');

module.exports = Object.assign({
  entry: [
    ...devEntry,
    './app/src/conf',
    './app/src/index'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.json']
  },

  output: {
    path: path.join(__dirname, publicFolder),
    filename: 'application.js',
    chunkFilename: '[id].chunk.js'
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      }
    }),
    new webpack.optimize.DedupePlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: INCLUDED_PATHS,
        exclude: ESLINT_EXCLUDE
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [...devLoaders, 'babel'],
        include: INCLUDED_PATHS
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=cm-[local]___[hash:base64:5]',
          'sass'
        ],
        include: [
          path.join(__dirname, 'app'),
          path.resolve(__dirname, './node_modules/react-toolbox'),
          path.resolve(__dirname, './node_modules/scss-flex-grid/')
        ],
        exclude: []
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: [
          path.resolve(__dirname, './node_modules/font-awesome/css'),
          path.resolve(__dirname, './node_modules/material-design-icons/'),
          path.resolve(__dirname, './node_modules/react-datetime/'),
          path.resolve(__dirname, 'app/assets/iconStyles/')
        ]
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: []
      },
      {
        test: /\.woff(2)?(\?[a-z0-9=&.]+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
        include: [/fonts/, INCLUDED_MATERIAL_DESIGN_ICON]
      },
      {
        test: /\.woff?(\?[a-z0-9=&.]+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
        include: [/fonts/, INCLUDED_MATERIAL_DESIGN_ICON]
      },
      {
        test: /\.ttf(\?[a-z0-9=&.]+)?$/,
        loader: 'url?limit=55000&mimetype=application/octet-stream',
        include: [/fonts/, INCLUDED_MATERIAL_DESIGN_ICON]
      },
      {
        test: /\.otf(\?[a-z0-9=&.]+)?$/,
        loader: 'url?limit=55000&mimetype=application/octet-stream',
        include: [/fonts/]
      },
      {
        test: /\.eot(\?[a-z0-9=&.]+)?$/,
        loader: 'url',
        include: [/fonts/, INCLUDED_MATERIAL_DESIGN_ICON]
      },
      {
        test: /\.svg(\?[a-z0-9=&.]+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
        include: [/fonts/]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?name=[path][name].[ext]&context=./app/',
          'image-webpack?bypassOnDebug=false&optimizationLevel=7&interlaced=false'
        ],
        include: [/media/]
      },
      {
        test: /\.json$/,
        loader: 'file?name=mocks/[name].[ext]',
        include: /mocks/
      },
      {
        test: /\.(html|ico)$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },
  postcss: [
    stylelint,
    autoprefixer({
      browsers: [
        'ff >= 40',
        'chrome >= 44'
      ]
    }),
    precss
  ],
  eslint: {
    emitWarning: true
  }
}, devConfig);
