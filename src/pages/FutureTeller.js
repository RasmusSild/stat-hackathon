import React from 'react';
import Employment from './../Employment';
import EmploymentThumbnail from './../EmploymentThumbnail';
import NationalDomains from './../NationalDomains';
import NationalDomainsThumbnail from './../NationalDomainsThumbnail';
import ForeignDomains from './../ForeignDomains';
import ForeignDomainsThumbnail from './../ForeignDomainsThumbnail';

import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Card from 'react-bulma-components/lib/components/card';
import Heading from 'react-bulma-components/lib/components/heading';
import { Select } from 'react-bulma-components/lib/components/form';
import Image from 'react-bulma-components/lib/components/image';

const FutureTeller = () => {

  const [activeChart, setActiveChart] = React.useState('employment');

  return (
    <Container>
        <Columns className="header">
          <Columns.Column size={3}>
            <Image src="/images/logo.svg" />
        </Columns.Column>
        <Columns.Column size={9}>
          <Heading size={3} renderAs="h2" >see how your todays decisions will influence our tomorrow in             <Select>
              <option>Labour Market</option>
              <option>Population</option>
              <option>Salaries in Estonia</option>
              <option>Estonian Enterprises and Enterprise Demography</option>
              <option>Economy-wide Material Flow Accounts</option>
              <option>Youth Conditions in Estonia</option>
            </Select></Heading>
          <Image src="/images/people.svg" />
        </Columns.Column>
        </Columns>

      <Columns className="is-fullheight">
        <Columns.Column size={3}>
          <Card onClick={() => setActiveChart('employment')}>
            <Card.Content>
              <EmploymentThumbnail />
            </Card.Content>
          </Card>
          <Card onClick={() => setActiveChart('fDomains')}>
            <Card.Content>
              <ForeignDomainsThumbnail />
            </Card.Content>
          </Card>
          <Card onClick={() => setActiveChart('nDomains')}>
            <Card.Content>
              <NationalDomainsThumbnail />
            </Card.Content>
          </Card>
        </Columns.Column>
        <Columns.Column size={9}>
        <Card>
          {activeChart === 'employment' && <Employment />}
          {activeChart === 'nDomains' && <NationalDomains />}
          {activeChart === 'fDomains' && <ForeignDomains />}
          </Card>
        </Columns.Column>
        {/*
          <>
            <Columns.Column size={6}>
              <NationalDomains />
            </Columns.Column>
            <Columns.Column size={6}>
              <ForeignDomains />
            </Columns.Column>
            <Columns.Column size={12}>
              <SampleChart2 />
            </Columns.Column>
          </>*/
        }
      </Columns>
    </Container>
  );
};

export default FutureTeller;
