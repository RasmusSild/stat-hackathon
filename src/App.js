import React from 'react';
import './App.css';
import SampleChart from './SampleChart';
import SampleChart2 from './SampleChart2';
import SampleChart3 from './SampleChart3';
import {Columns, Card} from "react-bulma-components/full";

const App = () => (
    <div className="app">
        <Columns>
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
            <Columns.Column size={9}>
                <SampleChart2/>
            </Columns.Column>
        </Columns>
    </div>
);

export default App;
