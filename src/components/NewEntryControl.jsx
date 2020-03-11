import React from 'react';
import NewGeneralJournalRecordForm from './NewGeneralJournalRecordForm';
import NewMedHistoryMilestoneForm from './NewMedHistoryMilestoneForm';
import Dashboard from './Dashboard';
import PropTypes from 'prop-types';

class NewEntryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      journalFormVisibleOnPage: false,
      medMilestoneFormVisibleOnPage: false
    };
    this.handleStartNewJournalEntry = this.handleStartNewJournalEntry.bind(this);
    this.handleStartNewMedMilestone = this.handleStartNewMedMilestone.bind(this);
  }

  handleStartNewJournalEntry(){
    this.setState({journalFormVisibleOnPage: true});
  }
  handleStartNewMedMilestone(){
    this.setState({medMilestoneFormVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.journalFormVisibleOnPage){
      currentlyVisibleContent = <NewGeneralJournalRecordForm onNewJournalEntryCreation={this.props.onNewJournalEntryCreation}/>
    } elseif (this.state.medMilestoneFormVisibleOnPage){
     currentlyVisibleContent = <NewMedHistoryMilestoneForm onNewMedMilestoneEntryCreation={this.props.onNewMedMilestoneEntryCreation}/>
    } else {
      currentlyVisibleContent = <Dashboard onStartNewJournalEntry={this.handleStartNewJournalEntry}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewEntryControl.propTypes = {
  onNewJournalEntryCreation: PropTypes.func,
  onNewMedMilestoneEntryCreation: PropTypes.func
}

export default NewEntryControl;
