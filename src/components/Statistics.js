import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

function Statistics({ title, stats }) {

  const Statistics = styled.section`
    max-width: 268px;
    box-shadow: 0 2px 2px rgba(2, 2, 2, 0.02);
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 100px;
  `;

  const Title = styled.h2`
    color: #475965;
    font-family: "Proxima Nova - Semibold";
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.16px;
    min-height: 70px;
    line-height: 70px;
    display: block;
  `;

  const StatList = styled.ul`
    display: flex;
    flex-direction: row;
    min-width: 100%;
  `;

  const StatListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 60px;
    flex-grow: 1;
  `;

  const StatLabel = styled.span`
    font-family: "Proxima Nova";
    font-size: 12px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.3px;
  `;

  const StatPercantage = styled.span`
    font-family: "Proxima Nova";
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.45px;
  `;


  return (
    <Statistics className="statistics">
      {title && <Title className="title">{title}</Title>}
      {stats.length > 0 && <StatList className="stat-list">
        {stats.map(stat => (
          <StatListItem key={stat.id}>
            <StatLabel>{stat.label}</StatLabel>
            <StatPercantage>{stat.percentage}</StatPercantage>
          </StatListItem>
        ))}
      </StatList>}
    </Statistics>)
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array
};

Statistics.defaultProps = {
  title: '',
  stats: []
};

export default Statistics;