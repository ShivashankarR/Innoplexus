import React from 'react'
import PropTypes from 'prop-types'
import '../resources/css/bootstrap.min.css'

const AbsoluteCount = ({currency,value,icon,name}) => (
    <div className="absolute-count-container">
        <span className="abs-name">
            {name}
        </span>
        <span className="abs-value">
            {currency} {value} <span className={icon}></span>
        </span>
    </div>

);

AbsoluteCount.propTypes = {
    currency:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired,
};

export default AbsoluteCount;