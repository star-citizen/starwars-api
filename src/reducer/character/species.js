import { SET_CHARACTER_SPECIES } from './actions';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTER_SPECIES:
          return action.species;
        default:
          return state;
    }
};