import React from 'react';
const Section = () => {
  return (
    <div>
        <section>
        <h2>INDIA Frequently Asked Questions(FAQ's)</h2>
        <div class="pad">
            <button class="accordion">What language is spoken in India?</button>
            <div class="panel">
                <p>The official language in India is Hindi.</p>
            </div>
        </div>

        <div class="pad">
            <button class="accordion">Is English spoken throughout India?</button>
            <div class="panel">
                <p>English is the second most common language in India..</p>
            </div>
        </div>

        <div class="pad">
            <button class="accordion">What is the currency used in India?</button>
            <div class="panel">
                <p>The currency used throughout the country is the Indian rupee. 
                    Most vendors will also accept Mastercard or Visa. ATMs are commonplace in India.</p>
            </div>
        </div>
        
        <div class="pad">
            <button class="accordion">Is India a family-friendly destination?</button>
            <div class="panel">
                <p>India offers many family-oriented activities including visits to forts and palaces, tiger and leopard safaris, beaches, and museums.
                     We can create a custom itinerary based on your family's interests.
                </p>
            </div>
        </div>

        <div class="pad">
            <button class="accordion">How welcoming is India to LGBTQ travellers?</button>
            <div class="panel">
                <p>The majority of the country is safe for LGBTQ travelers and families. The country does hold somewhat conservative values, so public 
                    displays of affection between gay or straight couples is not common.
                </p>
            </div>
        </div>

        <div class="pad">
            <button class="accordion">What are the main annual festivals or events held?</button>
            <div class="panel">
                <p>India has many festivals and events, but two of the biggest celebrations are Diwali and Holi. Diwali is the Hindu Festival of Lights 
                    celebrated annually for five days in either October or November. Holi is the Hindu Festival of Colours, 
                    celebrated annually in March after the full moon.</p>
            </div>
        </div>
        </section>
        <br></br>
    </div>
  )
}

export default Section