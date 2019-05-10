import React from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Hero from 'react-bulma-components/lib/components/hero';
import Image from 'react-bulma-components/lib/components/image';

const Landing = () => (
  <>
  <Hero>
    <Hero.Body>
        <Container className="has-text-centered">
          <Image src="/images/desk.svg"  />
      </Container>
    </Hero.Body>
  </Hero>
  <Hero color="dark">
    <Hero.Body>
        <Container className="has-text-centered">
        <Heading>
          What interest you most about the future?
        </Heading>
      </Container>
    </Hero.Body>
  </Hero>
  </>
)

export default Landing;