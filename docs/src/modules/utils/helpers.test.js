import { assert } from 'chai';
import { getDependencies } from './helpers';

const s1 = `import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@6thquake/react-material/styles';
import Input from '@6thquake/react-material/Input';
import InputLabel from '@6thquake/react-material/InputLabel';
import FormControl from '@6thquake/react-material/FormControl';
import FormHelperText from '@6thquake/react-material/FormHelperText';
import Select from '@6thquake/react-material/Select';
import FooBar, { Qux } from '@foo-bar/bip';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formContro
`;

const s2 = `import React from 'react';
import PropTypes from 'prop-types';
import * as _ from '@unexisting/thing';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@6thquake/react-material/TextField';
import Paper from '@6thquake/react-material/Paper';
import MenuItem from '@6thquake/react-material/MenuItem';
import { withStyles } from '@6thquake/react-material/styles';

const suggestions = [`;

describe('docs getDependencies helpers', () => {
  it('generate the right npm dependencies', () => {
    assert.deepEqual(getDependencies(s1), {
      react: 'latest',
      'react-dom': 'latest',
      'react-material': 'next',
      'prop-types': 'latest',
      '@foo-bar/bip': 'latest',
    });
    assert.deepEqual(getDependencies(s2), {
      react: 'latest',
      'react-dom': 'latest',
      'react-material': 'next',
      'prop-types': 'latest',
      '@unexisting/thing': 'latest',
      'react-autosuggest': 'latest',
      'autosuggest-highlight': 'latest',
    });
  });
});
