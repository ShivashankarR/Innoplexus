import React from 'react'
import MarketingChannelMix from '../components/MarketingChannelMix'
import PortfolioSpend from '../containers/PortfolioSpend'
import MCMFooter from '../components/MCMFooter'
import Trend from '../components/Trend'

const App = () => (
    <div>
        <div className="marketing-channel-mix-container">
            <MarketingChannelMix/>
            <PortfolioSpend/>
            <MCMFooter/>
        </div>
        <div className="trend-container">
            <Trend/>
        </div>
    </div>

);

export default App
