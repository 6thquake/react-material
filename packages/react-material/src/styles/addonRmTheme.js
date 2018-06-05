import deepmerge from 'deepmerge';
import { orange, green, common } from '@material-ui/core/colors';

const addonRmTheme = function(theme){
  
  const addonTheme = {
    palette: {
      waring: {
        light: orange['300'],
        main: orange['500'],
        dark: orange['700'],
        contrastText: common.white
      },
      success: {
        light: green['300'],
        main: green['500'],
        dark: green['700'],
        contrastText: common.white
      },
      progress: {
        light: green['300'],
        main: green['500'],
        dark: green['700'],
        contrastText: common.white
      }
    }
  };

  return {
    ...deepmerge(theme, addonTheme)
  };
}

export default addonRmTheme;