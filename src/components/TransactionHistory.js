import React from 'react';
import PropTypes from 'prop-types';

function TransactionHistory({ transactions }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {transactions.length > 0 && <tbody>
        {transactions.map(transactions => (
          <tr key={transactions.id}>
            <td>{transactions.type}</td>
            <td>{transactions.amount}</td>
            <td>{transactions.currency}</td>
          </tr>
        ))}
      </tbody>}
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.array
};

TransactionHistory.defaultProps = {
  item: []
};

export default TransactionHistory;