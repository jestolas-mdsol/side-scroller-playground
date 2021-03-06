import update from 'immutability-helper';
import { createAction } from 'redux-actions';

// Actions
const UPDATE_ACTIVE_KEYS = 'player_character/UPDATE_ACTIVE_KEYS';
const REMOVE_ACTIVE_KEY = 'player_character/REMOVE_ACTIVE_KEY';

// Reducer
const initialState = {
  activeKeys: {},
  player: null, // #here - this will eventually be an array of players
};

export default function playerCharacterReducer(state = initialState, action = {}) {
  const { payload } = action;
  switch (action.type) {
    case UPDATE_ACTIVE_KEYS: {
      return update(state, { activeKeys: { $merge: payload } });
    }
    default: {
      return state;
    }
  }
}

// Action Creators
export const updateActiveKeys = createAction(UPDATE_ACTIVE_KEYS);
