import React from 'react';
import FutureTeller from './pages/FutureTeller';
import Landing from './pages/Landing';

const App = () => {
    const [activePage, setActivePage] = React.useState('futureteller');
    return(
        <div>
            {activePage==='landing' && <Landing onChange={setActivePage} />}
            {activePage === 'futureteller' && <FutureTeller onChange={setActivePage} />}
        </div>
    )
};

export default App;
