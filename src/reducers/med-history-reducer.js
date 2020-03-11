const initialState = {
  medHistoryDigest: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MEDICAL':
    const { dateMed, historyEvent, id } = action;
    let newState = {...state}
    let newJournal = {...newState.medHistoryDigest}
     newJournal[id]= {
        dateMed: dateMed,
        historyEvent: historyEvent,
        id: id
      };
    newState.medHistoryDigest = newMedical
    console.log(newState);

    return newState;
  default:
    return state;
};
}
