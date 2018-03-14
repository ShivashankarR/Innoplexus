import React from 'react'

const MCMFooter = () => (
    <div className="mcm-container">
        <span className="mcm-recommended glyphicon glyphicon-stop"><span
            className="mcm-recommended-text">Recommended</span>
        </span>
        <span className="mcm-current glyphicon glyphicon-stop"><span className="mcm-current-text">Current</span>
        </span>
        <button className="btn btn-default edit-channel-mix-btn">Edit Channel Mix</button>
    </div>
);
export default MCMFooter;