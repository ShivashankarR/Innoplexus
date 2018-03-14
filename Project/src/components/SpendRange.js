import React from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

class SpendRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 2 };
    }
    render() {
        return (
            <div className="spend-range-container">
                <h2 className="ms-header">Marketing Channel Mix</h2>
                <InputRange
                    formatLabel={value => `${value} M`}
                    maxValue={10}
                    minValue={0}
                    value={this.state.value}
                    className="spend-range-component"
                    onChange={value => this.setState({ value })} />
                <div className="spend">Spend</div>
            </div>
        );
    }
}

export default SpendRange;