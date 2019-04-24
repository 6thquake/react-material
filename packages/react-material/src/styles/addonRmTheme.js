import deepmerge from 'deepmerge';
import orange from '../colors/orange';
import green from '../colors/green';
import yellow from '../colors/yellow';
import common from '../colors/common';

const addonRmTheme = theme => {
  const addonTheme = {
    palette: {
      warning: {
        light: orange['300'],
        main: orange['500'],
        dark: orange['700'],
        contrastText: common.white,
      },
      success: {
        light: green['300'],
        main: green['500'],
        dark: green['700'],
        contrastText: common.white,
      },
      progress: {
        light: yellow['300'],
        main: yellow['500'],
        dark: yellow['700'],
        contrastText: common.white,
      },
    },
  };

  return {
    ...deepmerge(theme, addonTheme),
  };
};

export default addonRmTheme;
