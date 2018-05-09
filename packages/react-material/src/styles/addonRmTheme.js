import deepmerge from 'deepmerge';
import { orange, green } from 'material-ui/colors';

const addonRmTheme = function(theme){
  
  const addonTheme = {
    palette: {
      waring: {
        light: orange['300'],
        main: orange['500'],
        dark: orange['700']
      },
      success: {
        light: green['300'],
        main: green['500'],
        dark: green['700']
      },
      progress: {
        light: green['300'],
        main: green['500'],
        dark: green['700']
      }
    }
  };

  return {
    ...deepmerge(theme, addonTheme)
  };
}

export default addonRmTheme;