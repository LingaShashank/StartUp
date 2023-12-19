// Section.js

import React from 'react';
import Accordion from './Accordion'; // Adjust the path based on your file structure

const Section = () => {
  return (
    <div>
      <h2>INDIA Frequently Asked Questions(FAQ's)</h2>
      <Accordion title="What language is spoken in India?" 
      content="The official language in India is Hindi."/>
      <br></br>
      <Accordion title="Is English spoken throughout India?" 
      content="English is the second most common language in India.." />
      <br></br>
      <Accordion title="What is the currency used in India?" 
      content="The currency used throughout the country is the Indian rupee. 
      Most vendors will also accept Mastercard or Visa. ATMs are commonplace in India." />
      <br></br>
      <Accordion title="Is India a family-friendly destination?" 
      content="India offers many family-oriented activities including visits to forts and palaces, tiger and leopard safaris, beaches, and museums.
      We can create a custom itinerary based on your family's interests." />
      <br></br>
      {/* Add more accordions as needed */}
    </div>
  );
};

export default Section;
