import React from 'react';

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

function NewMSExperienceMilestoneForm(){
  return (
    <div>
    <br/>
    <h1>Selfcare Milestone</h1>
      <form>
        <input
          type='text'
          id='date'
          placeholder='Date'/>
        <textarea
          id='experience'
          placeholder="Milestone details here: self care, new practitioner, exercise, diet, social support, etc."/>
        <button type='submit'style={btnStyle}>Save!</button>
      </form>
    </div>
  )
}

export default NewMSExperienceMilestoneForm;
