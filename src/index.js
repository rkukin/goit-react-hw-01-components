import React from 'react';
import ReactDOM from 'react-dom';
import user from './user.json';
import ProfileCard from './components/ProfileCard';
import statisticalData from './statistical-data.json';
import Statistics from './components/Statistics';
import friends from './friends.json';
import FriendList from './components/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory'


// ReactDOM.render(<ProfileCard user={user} />, document.getElementById('root'));

// ReactDOM.render(
//     <Statistics title="Upload stats" stats={statisticalData} />,
//     document.getElementById('root'),
// );

// ReactDOM.render(
//     <FriendList friends={friends} />,
//     document.getElementById('root'),
// );

ReactDOM.render(
    <TransactionHistory items={transactions} />,
    document.getElementById('root'),
);
