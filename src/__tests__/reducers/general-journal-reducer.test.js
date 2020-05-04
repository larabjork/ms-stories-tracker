import generalJournalReducer from '../../reducers/general-journal-reducer';


describe ('generalJournalReducer', () => {
  let action;
  const sampleJournalData = {
    date: '1/2/19',
    journalEntry: 'lots of lorem impsum here',
    id: 1
  };

  const currentState = {
    1: {date: '1/2/19',
    journalEntry: 'lots of lorem impsum here',
    id: 1},
    2: {date: '1/2/21',
    journalEntry: 'lots and lots of lorem impsum here, but I realized it is in the future?',
    id: 2}
  };

  const newState = {
    1: {date: '1/2/19',
    journalEntry: 'lots of lorem impsum here',
    id: 1},
    3: {date: '1/2/21',
    journalEntry: 'I am going to edit this date and maybe this text too',
    id: 3},
  };


  test('Should return default state if no action type is recognized', () => {
    expect(generalJournalReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add new journal entry to masterGeneralJournal', () => {
      const { date, journalEntry, id } = sampleJournalData;
      action = {
        type: 'ADD_JOURNAL',
        date: date,
        journalEntry: journalEntry,
        id: id
       };
     expect(generalJournalReducer({}, action)).toEqual({[id] : {
      date: date,
      journalEntry: journalEntry,
      id: id
     }
    });
  });

  test('Should successfully delete a journal entry', () => {
    action = {
      type: 'DELETE_JOURNAL',
      id: 2
    };
    expect(generalJournalReducer(currentState, action)).toEqual({
      1: {date: '1/2/19',
      journalEntry: 'lots of lorem impsum here',
      id: 1}
    });
  });




});
