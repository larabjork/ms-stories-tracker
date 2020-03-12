import React from 'react';
import './../About.css';
import { Container, Row, Col, Image   }from 'react-bootstrap';

const gridCentering = {
  textAlign: "center",
}

const iconCaption = {
  paddingTop: "15px"
}

function About(){
  return (
    <div className="bodyDiv">
      <Container>
      <h1>" You should keep a symptom journal... "</h1>
      <p>You probably heard this from someone when you were first diagnosed with multiple sclerosis&mdash;or maybe even before a doctor officially delivered this news. I certainly read this more than once, and it's good advice.</p>
      <p>At first, when I was having lots of symptoms, it was really helpful to track what was going on every day. But once that relapse was over, I struggled. Every tingle or twinge made me think about whether it was worth writing down.</p>
      <p>Now that I've lived with an MS diagnosis for almost 10 years, I've come to see that there are at least three ways I think about my life with MS. </p>
        <Row >
          <Col xs={6} md={4} lg={2} style={gridCentering}>
              <h6 style={iconCaption}><strong>Medical Care</strong></h6><Image src="icons8-treatment-80.png"/>
          </Col>
          <Col xs={6} md={8} lg={10}>
          <br/>
          <ul>
            <li><strong>What:</strong> Appointments, tests, medications, symptoms, relapses&mdash;the items that are tracked in my medical records</li>
            <li><strong>Why:</strong> My neurologist wants to talk about them at each visit</li>
            <li><strong>Why:</strong> When I see a new doctor, I need easy access to this information</li>
          </ul>
                      <br/>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4} lg={2} style={gridCentering}>
            <h6 style={iconCaption}><strong>Self Care</strong></h6><Image src="icons8-reflection-80.png"/>
          </Col>
          <Col xs={6} md={8} lg={10}>
            <br/>
            <ul>
              <li><strong>What:</strong> Things that are good for me, but that aren't the focus of a visit to the neurologist</li>
              <li><strong>Why:</strong> There are a lot of options for self care</li>
              <li><strong>Why:</strong> Having a list of these strategies helps me feel good about how I'm taking care of myself</li>
            </ul>
                        <br/>
          </Col>
          </Row>
        <Row>
          <Col xs={6} md={4} lg={2} style={gridCentering}>
            <h6 style={iconCaption}><strong>Living</strong></h6><Image src="icons8-journal-80.png"/>
          </Col>
          <Col xs={6} md={8} lg={10}>
          <br/>
          <ul>
            <li><strong>What:</strong> Normal events, emotions, activities, and stuff that comes with living</li>
            <li><strong>Why:</strong> I didn't stop being a person when I became an MS patient. Sometimes, I just need a place to process all of this</li>
            <li><strong>Why:</strong> When I look back at my journals over time, it has helped me see how MS has affected my life</li>
          </ul>
                      <br/>
          </Col>
        </Row>

    </Container>
    </div>
  );
}

export default About;
