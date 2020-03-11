import React from "react";
import PropTypes from "prop-types";
import './../JournalForm.css';

function MedHistoryMilestone(props){
  return (
      <div>
        <h6 className="date">Date: {props.date} </h6>
        <p>Event: {props.historyEvent}</p>
      </div>
  );
}

MedHistoryMilestone.propTypes = {
  date: PropTypes.string,
  historyEvent: PropTypes.string
};

export default MedHistoryMilestone;
