import React from 'react';
import axios from 'axios';
import List from "./pair_list";
import Intermediate from "./intermediate";
import MarketFilter from "./marketFilter";


const Showed_value = (props) => {
    if (props.value) {
        return (
            <p style={{textAlign: 'center'}}>Showed <b>{props.value}</b> pairs</p>
        )
    } else {
        return null
    }
};

const Show_raw_info = (props) => {
    if (Object.keys(props.value).length) {
        return (
            <div style={{textAlign: 'center', margin: '20px'}}>

                <p>
                    <button className="btn btn-warning" type="button" data-toggle="collapse"
                            data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
                            onClick={props.onClick}>
                        Show raw JSON data
                    </button>
                </p>

                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        {JSON.stringify(props.value)}
                    </div>
                </div>

            </div>
        )
    } else {
        return null
    }
};

class content extends React.Component {
    state = {
        pairs: [],
        pair_parameters: [],
        fetching_time: '',
        selected_parameter: 0,
        market_filter_list: [],
        market_filter_selected: 0,
        showed_pairs: 0,
        SHOW_RAW: false
    };

    retrieveSubmit = async arg => {
        const response = await axios.get('https://poloniex.com/public?command=returnTicker'),
            keys = Object.keys(response.data),
            bank = [];

        for (let i = 0; i < keys.length; i++) {
            const index_end_key = keys[i].indexOf('_');
            if (bank.indexOf(keys[i].substring(0, index_end_key)) === -1) {
                bank.push(keys[i].substring(0, index_end_key));
            }
        }

        this.setState({
            pairs: response.data,
            fetching_time: String(new Date()),
            pair_parameters: Object.keys(response.data[Object.keys(response.data)[0]]),
            market_filter_list: bank.sort()
        });

    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        const list_el_count = document.getElementsByClassName('list-group')[0].children.length;
        if (this.state.showed_pairs !== list_el_count) {
            this.setState({
                showed_pairs: list_el_count
            })
        }
    }


    render() {
        return <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">

                    <p style={{textAlign: 'center', margin: 10}}>Last
                        update: <b>{this.state.fetching_time !== '' ? this.state.fetching_time :
                            'never'}</b></p>
                    <button type="button" className="btn btn-success btn-block " onClick={this.retrieveSubmit}>
                        {Object.keys(this.state.pairs).length === 0 ? 'FETCH' : 'RENEW'}
                    </button>

                    <p style={{
                        textAlign: 'center',
                        margin: 10
                    }}>Total <b>{Object.keys(this.state.pairs).length}</b> pairs</p>


                    <Show_raw_info value={this.state.pairs}
                                   onClick={() => this.state.SHOW_RAW ? this.setState({SHOW_RAW: false}) : this.setState({SHOW_RAW: true})}/>


                    <Intermediate
                        onClick={(e) => e ? this.setState({selected_parameter: e}) : null}
                        pair_parameters={this.state.pair_parameters}
                        selected_parameter={this.state.selected_parameter}/>

                    <MarketFilter market_filter_list={this.state.market_filter_list}
                                  onClick={(e) => e > -1 ? this.setState({market_filter_selected: e}) : null}/>

                    <Showed_value value={this.state.showed_pairs}/>

                    <ul className="list-group">
                        <List data={this.state.pairs} selected_parameter={this.state.selected_parameter}
                              pair_parameters={this.state.pair_parameters}
                              market_filter_list={this.state.market_filter_list}
                              market_filter_selected={this.state.market_filter_selected}/>
                    </ul>

                </div>
            </div>
        </div>
    }


}

export default content;