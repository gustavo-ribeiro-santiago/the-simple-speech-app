import Accordion from 'react-bootstrap/Accordion';

function About() {
  return (
    <Accordion className="mx-2 about">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <i className="bi bi-info-circle mx-2"></i>
          About this Web App
        </Accordion.Header>
        <Accordion.Body>
          How many years of education are required to understand your speech?
          <br /> <br />
          The Flesch-Kincaid Grade Level test was created in the 1970s as a
          project for the US Navy. The scores match up to the US years of
          education readers will need to be able to comprehend a particular
          text. It is a very popular test used by educators, marketeers, policy
          makers and many others. 
          <br /> <br />
          Interestingly, successful communicators
          such as Steve Jobs and Elon Musk are known to give speeches that,
          according to this test, demand minimal education.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default About;