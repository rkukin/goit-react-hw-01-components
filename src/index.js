import React from 'react';
import ReactDOM from 'react-dom';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import MainComponent from './components/MainComponent'

ReactDOM.render(<MainComponent user={user} title='Upload stats' stats={statisticalData} friends={friends} transactions={transactions} />, document.getElementById('root'));
