import React from 'react';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      {stats.length > 0 && <ul className="stat-list">
        {stats.map(stat => (
          <li key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}</span>
          </li>
        ))}
      </ul>}
    </section>)
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array
}

Statistics.defaultProps = {
  title: '',
  stats: []
}

export default Statistics;