import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import './../JournalForm.css';

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

function NewGeneralJournalRecordForm(props) {
  let _date = null;
  let _journalEntry = null;

  function handleNewJournalEntrySubmit(event) {
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'ADD_JOURNAL',
      id: v4(),
      date: _date.value,
      journalEntry: _journalEntry.value
    }
    dispatch(action)
    _date.value = '';
    _journalEntry.value = '';
  }

  return (
    <div>
    <br/>
    <h1 className="head">Today's Thoughts</h1>
      <form onSubmit={handleNewJournalEntrySubmit} className="paper">
        <input
          type='text'
          id='date'
          placeholder='Date'
          ref={(input) => {_date = input;}}/>
        <textarea
          id='journalEntry'
          placeholder="What's happening?"
          ref={(textarea) => {_journalEntry = textarea;}}/>
        <button type='submit' style={btnStyle}>Save!</button>
      </form>
    </div>
  )
}

export default connect()(NewGeneralJournalRecordForm);
