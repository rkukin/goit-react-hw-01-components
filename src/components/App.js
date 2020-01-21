import React from 'react';
import ProfileCard from './ProfileCard';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory'

function App(props) {
  return (
    <>
      <ProfileCard user={props.user} />
      <Statistics title={props.title} stats={props.stats} />
      <FriendList friends={props.friends} />
      <TransactionHistory transactions={props.transactions} />
    </>
  )
}

export default App;