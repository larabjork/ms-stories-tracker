import React from 'react';

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
        <button type='submit'>Save!</button>
      </form>
    </div>
  )
}

export default NewMSExperienceMilestoneForm;
