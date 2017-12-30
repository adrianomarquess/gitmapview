// Action Types
export const Types = {
  ADD: 'users/ADD',
  SEARCH: 'users/SEARCH',
  MODAL_STATE: 'users/MODAL_STATE',
};

// Reducer
const initialState = {
  modalVisible: false,
  users: [],
};

export function map(state = initialState, action) {
  switch (action.type) {
    case Types.ADD:
      return {
        modalVisible: state.modalVisible,
        users: [...state.users, action.payload.user],
      };

    case Types.MODAL_STATE:
      return {
        modalVisible: action.payload.visible,
        users: state.users,
      };

    default:
      return state;
  }
}

// Action Creators
export function addUser(user) {
  return { type: Types.SEARCH, payload: { user } };
}

export function modalState(visible) {
  return { type: Types.MODAL_STATE, payload: { visible } };
}
