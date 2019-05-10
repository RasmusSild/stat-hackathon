import React from 'react';
import Employment from './../Employment';
import NationalDomains from './../NationalDomains';
import NationalDomainsThumbnail from './../NationalDomainsThumbnail';
import ForeignDomains from './../ForeignDomains';
import ForeignDomainsThumbnail from './../ForeignDomainsThumbnail';
import SampleChart2 from './../SampleChart2';

import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Card from 'react-bulma-components/lib/components/card';
import Heading from 'react-bulma-components/lib/components/heading';

const FutureTeller = () => (
  <Container>
    <Columns className="is-fullheight">
      <Columns.Column size={12}>
        <Heading size={3} renderAs="h2" >Foo</Heading>
      </Columns.Column>
      <Columns.Column size={3}>
        <Card>
          <Card.Content>
            <ForeignDomainsThumbnail />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <NationalDomainsThumbnail />
          </Card.Content>
        </Card>
      </Columns.Column>
      <Columns.Column size={9}>
        <Employment />
      </Columns.Column>
      <Columns.Column size={6}>
        <NationalDomains />
      </Columns.Column>
      <Columns.Column size={6}>
        <ForeignDomains />
      </Columns.Column>
      <Columns.Column size={12}>
        <SampleChart2 />
      </Columns.Column>
    </Columns>
  </Container>
);

export default FutureTeller;
