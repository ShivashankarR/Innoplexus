import React from 'react'
import PropTypes from 'prop-types'
import '../resources/css/bootstrap.min.css'

const PortfolioItem = ({name,currentMix,suggestedMix}) => {
    const progressStyleForCurrentMix = {
        width:currentMix+'%'
    };
    const progressStyleForSuggestedMix = {
        width:suggestedMix+'%'
    };
    return (
        <div>
            <span className="channel-name">{name}</span>
            <div className="progress-container">
                <div className="progress suggested-mix">
                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={progressStyleForSuggestedMix}>
                    </div>
                </div>
                <span className="suggested-mix-figure">{suggestedMix}%</span>
            </div>
            <div className="progress-container">
                <div className="progress current-mix">
                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={progressStyleForCurrentMix}>
                    </div>
                </div>
                <span className="current-mix-figure">{currentMix}%</span>
            </div>

        </div>
    )


};

PortfolioItem.propTypes = {
    name:PropTypes.string.isRequired,
    currentMix:PropTypes.string.isRequired,
    suggestedMix:PropTypes.string.isRequired,
};

export default PortfolioItem;