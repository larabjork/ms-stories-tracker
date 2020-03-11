import React from "react";
import PropTypes from "prop-types";
import './../JournalForm.css';

function MSExperienceMilestone(props){
  return (
      <div>
        <h6 className="date">Date: {props.date} </h6>
        <p>Experience: {props.Experience}</p>
      </div>
  );
}

MSExperienceMilestone.propTypes = {
  date: PropTypes.string,
  Experience: PropTypes.string
};

export default MSExperienceMilestone;
