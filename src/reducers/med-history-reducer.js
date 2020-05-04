const initialState = {
  medHistoryDigest: {}
}

export default (state = initialState, action) => {
    const { dateMed, historyEvent, id } = action;
    switch (action.type) {
    case 'ADD_MEDICAL':
      return Object.assign({}, state, {
      [id]: {
        dateMed: dateMed,
        historyEvent: historyEvent,
        id: id
      }
     });
    case 'DELETE_MEDICAL':
      const newState = { ...state };
      delete newState[id];
      return newState;
  default:
    return state;
  };
}

