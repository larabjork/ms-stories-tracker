import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 } from 'uuid';




function NewMedHistoryMilestoneForm(props){
  let _date = null;
  let _historyEvent = null;

  function handleNewMedHistoryMilestoneSubmit(event){
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'ADD_MEDICAL',
      id: v4(),
      date: _date.value,
      historyEvent: _historyEvent.value
    }
    dispatch(action)
    _date.value = '';
    _historyEvent.value = '';
  }
  
  return (
    <div>
      <form onSubmit={handleNewMedHistoryMilestoneSubmit}>
        <input
          type='text'
          id='date'
          placeholder='Date'
          ref={(input) => {_date = input;}}/>
        <textarea
          id='historyEvent'
          placeholder="Milestone details here: symptom, diagnosis, test, medication etc."
          ref={(textarea) => {_historyEvent = textarea;}}/>
        <button type='submit'>Save!</button>
      </form>
    </div>
  )
}

export default connect() (NewMedHistoryMilestoneForm);
