import React from 'react'
import '../resources/css/trend.css'
import StackedBarNLineChart from '../components/StackedBarNLineChart'
import Legends from '../components/Legends'
const Trend = () => (
    <div className="trend-item">
        <div className="trend-heading-container">
            <span className="trend-title ms-header">Trend</span>
            <input type="date" defaultValue="2017-06-01" className="trend-date-field"/><span className="glyphicon glyphicon-calendar calender-icon"></span>
        </div>
        <StackedBarNLineChart data={[5,10,1,3]} size={[1200,1200]}/>
        <Legends/>
    </div>
);
export default Trend;