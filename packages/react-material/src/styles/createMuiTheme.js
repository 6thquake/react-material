// @flow

import deepmerge from 'deepmerge'; // < 1kb payload overhead when lodash/merge is > 3kb.
import warning from 'warning';
import createTypography from './createTypography';
import createBreakpoints from './createBreakpoints';
import createPalette from './createPalette';
import createMixins from './createMixins';
import shadows from './shadows';
import transitions from './transitions';
import zIndex from './zIndex';
import spacing from './spacing';
import { pink, common, orange, green } from 'material-ui/colors';

function createMuiTheme(options: Object = {}) {
  const {
    palette: paletteInput = {},
    breakpoints: breakpointsInput = {},
    mixins: mixinsInput = {},
    typography: typographyInput = {},
    shadows: shadowsInput,
    ...other
  } = options;

  let newDefaultPalette = {
    waring: {
      main: pink['500'],
      dark: pink['700'],
      light: pink['300']
    },
    success: {
      main: green['500'],
      dark: green['700'],
      light: green['300']
    },
    progress: {
      main: orange['500'],
      dark: orange['700'],
      light: orange['300']
    }
  };
  let newPalette = {
    ...newDefaultPalette, ...paletteInput
  }
  const palette = createPalette(newPalette);
  const breakpoints = createBreakpoints(breakpointsInput);

  const muiTheme = {
    breakpoints,
    direction: 'ltr',
    mixins: createMixins(breakpoints, spacing, mixinsInput),
    overrides: {}, // Inject custom styles
    palette,
    props: {}, // Inject custom properties
    shadows: shadowsInput || shadows,
    typography: createTypography(palette, typographyInput),
    ...deepmerge(
      {
        transitions,
        spacing,
        zIndex,
      },
      other,
    ),
  };

  warning(
    muiTheme.shadows.length === 25,
    'Material-UI: the shadows array provided to createMuiTheme should support 25 elevations.',
  );

  return muiTheme;
}

export default createMuiTheme;
