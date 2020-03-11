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
      <p>At first, when I was having lots of symptoms, it was really helpful to track what was going on every day. But once that relapse was over, I struggled. Every tingle or  made me think about whether it was worth writing down.</p>
      <p>Now that I've lived with an MS diagnosis for almost 10 years, I've come to see that there are at least three ways I think about my life with MS: </p>
        <Row style={gridCentering}>
          <Col xs={6} md={4}>
              <Image src="icons8-treatment-80.png"/><h6 style={iconCaption}><strong>Medical Care: </strong>Appointments, tests, medications, symptoms, relapses&mdash;the items that are tracked in my medical records and my neurologist wants to talk about them at each visit. When I see a new doctor, I need easy access to this information.</h6>
          </Col>
          <Col xs={6} md={4}>
            <Image src="icons8-reflection-80.png"/><h6 style={iconCaption}><strong>Self Care: </strong>I've also tried a lot of things that are good for me, but that aren't a focus of my neurologist visits. Over the years, I've experimented with various kinds of self care (my favorites: exercise, acupuncture, and talk therapy). Having a list of these strategies helps me feel good about how I'm taking care of myself.</h6>
          </Col>
          <Col xs={6} md={4}>
            <Image src="icons8-journal-80.png"/><h6 style={iconCaption}><strong>Living: </strong>I didn't stop being a person when I became an MS patient, so I have the normal events, emotions, activities, and stuff that comes with living. Sometimes, I just need a place to process all of this, and when I look back at my journals over time, it has helped me see how MS has affected my life.</h6>
          </Col>
        </Row>
    </Container>
    </div>
  );
}

export default About;
