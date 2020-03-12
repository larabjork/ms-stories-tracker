import React from 'react';
import { Container, Row, Col, Image }  from 'react-bootstrap';
import './../JournalForm.css';

const iconCaption = {
  paddingTop: "15px"
}
const gridCentering = {
  textAlign: "center",
}

function Dashboard() {
  return(
    <div>
      <Container>
        <h1>My Story Dashboard</h1>
        <Row style={gridCentering}>
          <Col xs={6} md={4}>
              <Image src="icons8-treatment-80.png"/><h6 style={iconCaption}><strong>My Most Recent Medical Milestone </strong></h6>
              <br/>
          </Col>
          <Col xs={6} md={4}>
            <Image src="icons8-reflection-80.png"/><h6 style={iconCaption}><strong>My Latest Self Care Victory</strong></h6>
            <br/>
          </Col>
          <Col xs={6} md={4}>
            <Image src="icons8-journal-80.png"/><h6 style={iconCaption}><strong>What I've Been Thinking About </strong></h6>
            <br/>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <p className="date">2/17/2020</p>
            <p> Tysabri infusion, no post infusion reactions</p>
          </Col>
          <Col xs={6} md={4}>
            <p className="date">12/1/2019</p>
            <p>Found new acupuncturist!</p>
          </Col>
          <Col xs={6} md={4}>
            <p className="date">3/1/2020</p>
            <p>There's so much happening, where to start...</p>
          </Col>
        </Row>



      </Container>
    </div>
  )
}


export default Dashboard;
