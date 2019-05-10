import React from 'react';
import FutureTeller from './pages/FutureTeller';
import Landing from './pages/Landing';

const App = () => {
    const [activePage, setActivePage] = React.useState('landing');

    const onPageChange = (page) => {
        setActivePage(page)
    }

    return(
        <div>
            {activePage==='landing' && <Landing onChange={(page) => onPageChange(page)} />}
            {activePage === 'futureteller' && <FutureTeller onChange={(page) => onPageChange(page)}/>}
        </div>
    )
};

export default App;
