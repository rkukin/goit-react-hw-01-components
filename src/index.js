import React from 'react';
import ReactDOM from 'react-dom';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import App from './components/App'

ReactDOM.render(<App user={user} title='Upload stats' stats={statisticalData} friends={friends} transactions={transactions} />, document.getElementById('root'));
