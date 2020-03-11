import React from 'react';
import MedHistoryMilestone from './MedHistoryMilestone';
import PropTypes from 'prop-types';



function MedHistoryDigest(props){
  return (
    <div>
      <h1>My Medical History</h1>
        {Object.keys(props.medHistoryDigest).map(function(eventId) {
          const event = props.medHistoryDigest[eventId];
          return <MedHistoryDigest date={event.date}
          historyEvent={event.historyEvent}
          key={eventId}
          eventId={eventId} />;
        })}
    </div>
  );
};

MedHistoryDigest.propTypes = {
  medHistoryDigest: PropTypes.object,
  currentRouterPath: PropTypes.string
};

export default MedHistoryDigest;
