import medHistoryReducer from '../../reducers/med-history-reducer';


describe ('medHistoryReducer', () => {
  let action;
  const sampleMedData = {
    dateMed: '1/2/19',
    historyEvent: 'lots of lorem impsum here',
    id: 1
  };

  const currentState = {
    1: {dateMed: '1/2/19',
    historyEvent: 'lots of lorem impsum here',
    id: 1},
    2: {dateMed: '1/2/21',
    historyEvent: 'lots and lots of lorem impsum here, but I realized it is in the future?',
    id: 2}
  };

  const newState = {
    1: {dateMed: '1/2/19',
    historyEvent: 'lots of lorem impsum here',
    id: 1},
    3: {dateMed: '1/2/21',
    historyEvent: 'I am going to edit this dateMed and maybe this text too',
    id: 3},
  };


  test('Should return default state if no action type is recognized', () => {
    expect(medHistoryReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add new medical history entry to masterMedHistory', () => {
      const { dateMed, historyEvent, id } = sampleMedData
      action = {
        type: 'ADD_MEDICAL',
        dateMed: dateMed,
        historyEvent: historyEvent,
        id: id
       };
     expect(medHistoryReducer({}, action)).toEqual({[id] : {
      dateMed: dateMed,
      historyEvent: historyEvent,
      id: id
     }
    });
  });

  test('Should successfully delete a medical history entry', () => {
    action = {
      type: 'DELETE_MEDICAL',
      id: 2
    };
    expect(medHistoryReducer(currentState, action)).toEqual({
      1: {dateMed: '1/2/19',
      historyEvent: 'lots of lorem impsum here',
      id: 1}
    });
  });




});