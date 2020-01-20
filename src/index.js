import React from 'react';
import ReactDOM from 'react-dom';
import user from './user.json';
import ProfileCard from './components/ProfileCard';
import statisticalData from './statistical-data.json';
import Statistics from './components/Statistics';


ReactDOM.render(<ProfileCard user={user} />, document.getElementById('root'));

ReactDOM.render(
    <Statistics title="Upload stats" stats={statisticalData} />,
    document.getElementById('root'),
);