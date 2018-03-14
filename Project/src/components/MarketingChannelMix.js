import React from 'react'
import SpendRange from '../components/SpendRange'
import AbsoluteCount from '../components/AbsoluteCount'
import OtherCount from '../components/OtherCount'
import '../resources/css/marketing-channel-mix.css'


const MarketingChannelMix = () => (
    <div>
        <div className="marketing-spend-container">
            <SpendRange initialValue=".6" min="0" max="100"/>
            <AbsoluteCount currency="$" value="0.6 M" icon="" name="Marketing Spend"/>
            <div className="estimated-list">
                <AbsoluteCount currency="" value="131 %" icon="glyphicon glyphicon-upload spend-idicator-icon" name="Estimated Lift"/>
            </div>
            <div className="other-count">
                <OtherCount name="PROTECTED" value="44"/>
                <OtherCount name="CURRENT" value="19"/>
            </div>
        </div>
    </div>
);

export default MarketingChannelMix