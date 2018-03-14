import React from 'react'
import PropTypes from 'prop-types'

const Portfolio = ({name, totalSpend, percentSpend}) => (
        <div>
            <span className="portfolio-name">{name}</span>
            <span className="portfolio-figure"><span className="totol-spend-figure">{totalSpend}</span> <span className="percent-spend">{percentSpend}</span></span>
        </div>
    );

Portfolio.propTypes = {
    name:PropTypes.string.isRequired,
    totalSpend:PropTypes.string.isRequired,
    percentSpend:PropTypes.string.isRequired
};

export default Portfolio;