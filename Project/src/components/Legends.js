import React from 'react'
import PropTypes from 'prop-types'
import '../resources/css/bootstrap.min.css'

const Legends = () => (
    <div className="legend-container">
        <span className="legend-item"></span>
        <span className="legend-text">New Rx</span>
        <span className="legend-item-brand"></span>
        <span className="legend-text">New to Brand Rx</span>
        <span className="legend-item-refills"></span>
        <span className="legend-text">Refills</span>
    </div>

);

export default Legends;