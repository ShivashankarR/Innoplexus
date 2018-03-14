import React from 'react'
import Portfolio from '../components/Portfolio'
import {getAccountsData,getPatientsData,getPhysiciansData} from '../reducers/portfolioSpendReducer'
import { connect } from 'react-redux'
import PortfolioItem from '../components/PortfolioItem'
import '../resources/css/bootstrap.min.css'

const PortfolioSpend = ({accounts, physicians,patients}) => (
        <div className="portfolio-list-container">
            <div className="portfolio-container">
                <Portfolio name="Accounts" totalSpend="$ 0.24 M" percentSpend="40%"/>
                {accounts.map(portfolio =>
                    <PortfolioItem
                        key={portfolio.id}
                        {...portfolio}/>
                )}
            </div>
            <div className="portfolio-container">
                <Portfolio name="Physicians" totalSpend="$ 0.21 M" percentSpend="35%"/>
                {physicians.map(portfolio =>
                    <PortfolioItem
                        key={portfolio.id}
                        {...portfolio}/>
                )}
            </div>
            <div className="portfolio-container last-portfolio-container">
                <Portfolio name="Patients" totalSpend="$ 0.15 M" percentSpend="25%"/>
                {patients.map(portfolio =>
                    <PortfolioItem
                        key={portfolio.id}
                        {...portfolio}/>
                )}
            </div>
        </div>
    );

const mapStateToProps = (state) => {
    return{
        accounts: getAccountsData(state.portfolioSpendReducer),
        physicians:getPhysiciansData(state.portfolioSpendReducer),
        patients:getPatientsData(state.portfolioSpendReducer)
    }};

export default  connect(
    mapStateToProps
)(PortfolioSpend);