import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function TransactionHistory({ transactions }) {

  const Table = styled.table`
    width: 872px;
  `;

  const TableHeader = styled.th`
    background-color: #00bcd4;
    color: #ffffff;
    font-family: "Helvetica Neue Cyr";
    font-size: 13px;
    font-weight: 700;
    line-height: 50px;
    text-transform: uppercase;
    letter-spacing: 1.17px;
  `;

  const TableHead = styled.tr`
    height: 50px;
  `;

  const TableRow = styled(TableHead)`
    &:nth-child(2n){
      background-color: #ecf2f3;
    }
  `;

  const TableCell = styled.td`
    color: #5c6975;
    font-family: "Helvetica Neue Cyr";
    font-size: 15px;
    font-weight: 300;
    line-height: 50px;
    letter-spacing: 0.45px;
    margin: auto;
    text-align: center;
  `;

  return (
    <Table>
      <thead>
        <TableHead>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableHead>
      </thead>
      {transactions.length > 0 && <tbody>
        {transactions.map(transactions => (
          <TableRow key={transactions.id}>
            <TableCell>{transactions.type}</TableCell>
            <TableCell>{transactions.amount}</TableCell>
            <TableCell>{transactions.currency}</TableCell>
          </TableRow>
        ))}
      </tbody>}
    </Table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.array
};

TransactionHistory.defaultProps = {
  item: []
};

export default TransactionHistory;