import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

const btnStyle = {
  backgroundColor: '#210124cd',
  borderColor: '#210124cd',
  borderRadius: '5px',
  color: 'white',
  fontWeight: 'bold',
  padding: '10px',
  paddingRight: '20px',
  paddingLeft: '20px'
}


function NewMedHistoryMilestoneForm(props){
  let _dateMed = null;
  let _historyEvent = null;

  function handleNewMedHistoryMilestoneSubmit(event){
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'ADD_MEDICAL',
      id: v4(),
      dateMed: _dateMed.value,
      historyEvent: _historyEvent.value
    }
    dispatch(action)
    _dateMed.value = '';
    _historyEvent.value = '';
  }

  return (
    <div>
    <br/>
    <h1>Medical Milestone</h1>
      <form onSubmit={handleNewMedHistoryMilestoneSubmit}>
        <input
          type='text'
          id='dateMed'
          placeholder='Date'
          ref={(input) => {_dateMed = input;}}/>
        <textarea
          id='historyEvent'
          placeholder="Milestone details here: symptom, diagnosis, test, medication etc."
          ref={(textarea) => {_historyEvent =  textarea;}}/>
        <button type='submit' style={btnStyle}>Save!</button>
      </form>
    </div>
  )
}

export default connect()(NewMedHistoryMilestoneForm);
