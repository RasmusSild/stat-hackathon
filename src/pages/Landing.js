import React from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Hero from 'react-bulma-components/lib/components/hero';
import Image from 'react-bulma-components/lib/components/image';
import { Select } from 'react-bulma-components/lib/components/form';

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
          <Heading size={2}>
          What interest you most about the future?
        </Heading>
          <Heading subtitle size={3} renderAs="h2">
            <Select>
              <option>Labour Market</option>
              <option>Population</option>
              <option>Salaries in Estonia</option>
              <option>Estonian Enterprises and Enterprise Demography</option>
              <option>Economy-wide Material Flow Accounts</option>
              <option>Youth Conditions in Estonia</option>
            </Select>
        </Heading>
      </Container>
    </Hero.Body>
  </Hero>
  </>
)

export default Landing;