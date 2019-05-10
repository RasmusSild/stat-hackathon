import React from 'react';
import SampleChart from './SampleChart';
import SampleChart2Nat from './SampleChart2Nat';
import SampleChart2Imm from './SampleChart2Imm';
import SampleChart2 from './SampleChart2';
import SampleChart3 from './SampleChart3';

import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Card from 'react-bulma-components/lib/components/card';
import Heading from 'react-bulma-components/lib/components/heading';

const App = () => (
    <Container>
        <Columns>
            <Columns.Column size={12}>
                <Heading size={3} renderAs="h2" >Foo</Heading>
            </Columns.Column>
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
                <SampleChart/>
            </Columns.Column>
            <Columns.Column size={6}>
                <SampleChart2Nat/>
            </Columns.Column>
            <Columns.Column size={6}>
                <SampleChart2Imm/>
            </Columns.Column>
            <Columns.Column size={12}>
                <SampleChart2/>
            </Columns.Column>
        </Columns>
        </Container>
);

export default App;
