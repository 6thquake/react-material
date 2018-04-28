import {createMuiTheme} from 'material-ui/styles';
import { pink, common, orange, green} from 'material-ui/colors';

const newCreateTheme = function(theme){

  let  newDefaultPalette = {
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
  let palette = {
    ...newDefaultPalette, ...theme.palette
  }
  theme.palette = palette
  return createMuiTheme(theme)
}

export default newCreateTheme