import React from 'react';


// const map = (props) => {
class pair_list extends React.Component {
    state = {counter: 0};


    // console.log(props, props.content.length);

    // let counter = 0;
    // const items = Object.keys(props.data).map((keyName) => {
    //     const index_end_key = keyName.indexOf('_');
    //     if (keyName.substring(0, index_end_key) === props.market_filter_list[props.market_filter_selected]) {
    //         counter++;
    //         this.props.return(<li key={props.data[keyName].id} className="list-group-item"
    //                               style={{textAlign: "center"}}>
    //             {keyName}
    //             <b style={{margin: '20px'}}>{props.data[keyName][props.pair_parameters[props.selected_parameter]]}</b>
    //         </li>)
    //     } else {
    //         return null
    //     }
    //
    // });

    componentDidUpdate() {
        console.log(this.state.counter);
    }

    render() {

        // let counter = 0;
        return (Object.keys(this.props.data).map((keyName) => {


                    const index_end_key = keyName.indexOf('_');
                    if (keyName.substring(0, index_end_key) === this.props.market_filter_list[this.props.market_filter_selected]) {
                        // counter++;
                        // this.setState({counter: this.state.counter + 1});
                        return (
                            <li key={this.props.data[keyName].id} className="list-group-item"
                                style={{textAlign: "center"}}>
                                {keyName}
                                <b style={{margin: '20px'}}>{this.props.data[keyName][this.props.pair_parameters[this.props.selected_parameter]]}</b>
                            </li>)
                    } else {
                        return null
                    }


                }
            )
        )


    }

}

export default pair_list;