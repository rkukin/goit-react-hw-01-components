import React from 'react';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {

    return (
        <section class="statistics">
            {title && <h2 class="title">{title}</h2>}

            {stats.length > 0 && <ul class="stat-list">
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