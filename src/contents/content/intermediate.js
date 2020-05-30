import React from "react";
import Parameters from './parameters';

class intermediate extends React.Component {

    render() {
        if (Object.keys(this.props.pair_parameters).length) {
            return <div className="card border-secondary mb-3" style={{textAlign: 'center'}}>
                <div className="card-header">
                    <div style={{textAlign: 'center'}}><b>Choose parameter</b></div>
                </div>
                <div className="card-body text-secondary">
                    <Parameters onClick={(a) => this.props.onClick(a)}
                                pair_parameters={this.props.pair_parameters}
                                selected_parameter={this.props.selected_parameter}/>
                </div>
            </div>
        } else {
            return null
        }
    }
}

export default intermediate;