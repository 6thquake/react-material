import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import nodeGlobals from 'rollup-plugin-node-globals';
import { uglify } from 'rollup-plugin-uglify';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

const input = './src/index.js';
const name = 'react-material';
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};
const babelOptions = {
  exclude: /node_modules/,
  // We are using @babel/plugin-transform-runtime
  runtimeHelpers: true,
  configFile: '../../babel.config.js',
};
const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
  exclude: ['../../node_modules/process-es6/**'],
  namedExports: {
    '../../node_modules/react/react.js': [
      'Children',
      'Component',
      'PureComponent',
      'Fragment',
      'PropTypes',
      'createElement',
    ],
    '../../node_modules/react-dom/index.js': ['render'],
    '../../node_modules/prop-types/index.js': [
      'oneOfType',
      'object',
      'string',
      'number',
      'instanceOf',
      'oneOf',
      'func',
      'element',
      'arrayOf',
      'bool',
      'any',
      'shape',
      'node',
    ],
    '../../node_modules/@material-ui/core/styles/index.js': [
      'createGenerateClassName',
      'createMuiTheme',
      'createStyles',
      'jssPreset',
      'MuiThemeProvider',
      'withStyles',
      'withTheme',
    ],
    '../../node_modules/@material-ui/core/Modal/index.js': ['ModalManager'],
  },
};

export default [
  {
    input,
    output: { file: `build/umd/${name}.development.js`, format: 'umd', name, globals },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
  },
  {
    input,
    output: { file: `build/umd/${name}.production.min.js`, format: 'umd', name, globals },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      nodeGlobals(),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      sizeSnapshot(),
      uglify(),
    ],
  },
];
