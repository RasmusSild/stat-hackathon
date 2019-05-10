import React from 'react';
import Employment from './Employment';
import NationalDomains from './NationalDomains';
import ForeignDomains from './ForeignDomains';
import SampleChart2 from './SampleChart2';
import SampleChart3 from './SampleChart3';
import {Container, Columns, Card} from "react-bulma-components/full";

const App = () => (
    <Container>
        <Columns>
        <h1>Foo</h1>
            <Columns.Column size={3}>
                <Card>
                    <Card.Content>
                        <SampleChart3/>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <SampleChart3/>
                    </Card.Content>
                </Card>
            </Columns.Column>
            <Columns.Column size={9}>
                <Employment/>
            </Columns.Column>
            <Columns.Column size={6}>
                <NationalDomains/>
            </Columns.Column>
            <Columns.Column size={6}>
                <ForeignDomains/>
            </Columns.Column>
            <Columns.Column size={12}>
                <SampleChart2/>
            </Columns.Column>
        </Columns>
        </Container>
);

export default App;
