import actionTypes from 'docs/src/modules/redux/actionTypes';
import blue from '@6thquake/react-material/colors/blue';
import pink from '@6thquake/react-material/colors/pink';
import { darken } from '@6thquake/react-material/styles/colorManipulator';

const initialState = {
  paletteType: 'light',
  paletteColors: {
    primary: blue,
    secondary: {
      // Darken so we reach the AA contrast ratio level.
      main: darken(pink.A400, 0.08),
    },
  },
  direction: 'ltr',
};

const mapping = {
  [actionTypes.THEME_CHANGE_PALETTE_TYPE]: (state, action) => ({
    ...state,
    paletteType: action.payload.paletteType,
  }),
  [actionTypes.THEME_CHANGE_DIRECTION]: (state, action) => ({
    ...state,
    direction: action.payload.direction,
  }),
  [actionTypes.THEME_CHANGE_PALETTE_COLORS]: (state, action) => ({
    ...state,
    paletteColors: action.payload.paletteColors,
  }),
};

function themeReducer(state = initialState, action) {
  let newState = state;

  if (mapping[action.type]) {
    newState = mapping[action.type](state, action);
  }

  return newState;
}

export default themeReducer;
