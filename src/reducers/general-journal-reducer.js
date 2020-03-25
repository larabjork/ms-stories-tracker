const initialState = {
  masterGeneralJournal: {}
}

export default (state = {}, action) => {
  const { date, journalEntry, id } = action;
  switch (action.type) {
  case 'ADD_JOURNAL':
    return Object.assign({}, state, {
      [id]: {
        date: date,
        journalEntry: journalEntry,
        id: id
      }
    });
  case 'DELETE_TICKET':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};
// export default (state = initialState, action) => {
//   switch (action.type) {
//   case 'ADD_JOURNAL':
//     const { date, journalEntry, id } = action;
//     let newState = {...state}
//     let newJournal = {...newState.masterGeneralJournal}
//      newJournal[id]= {
//         date: date,
//         journalEntry: journalEntry,
//         id: id
//       };
//     newState.masterGeneralJournal = newJournal
//
//
//     return newState;
//   default:
//     return state;
// };
// }
