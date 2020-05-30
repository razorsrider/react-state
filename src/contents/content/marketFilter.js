import React from 'react';
import Render_buttons from "./render_buttons";


class MarketFilter extends React.Component {

    render() {

        if (Object.keys(this.props.market_filter_list).length) {
            return (
                <div className="card border-secondary mb-3" style={{textAlign: 'center'}}>
                    <div className="card-header">
                        <div style={{textAlign: 'center'}}><b>Choose market</b></div>
                    </div>
                    <div className="card-body text-secondary">

                        <Render_buttons onClick={((q) => this.props.onClick(q))}
                                        market_filter_list={this.props.market_filter_list}/>

                    </div>
                </div>
            )
        } else {
            return null
        }


    }


}

export default MarketFilter;