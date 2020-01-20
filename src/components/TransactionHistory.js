import React from 'react';
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.length > 0 && <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>}
    </table>
  )
};

TransactionHistory.propTypes = {
  items: PropTypes.array
}

TransactionHistory.defaultProps = {
  item: []
}

export default TransactionHistory;