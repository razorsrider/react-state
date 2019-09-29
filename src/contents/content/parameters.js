import React from 'react';

class retrieved_info extends React.Component {

    onButtonClicked = (val) => {
        this.props.onClick(val);
    };


    render() {
        return (
            this.props.pair_parameters.map((keyName, i) => {
                return (
                    <button
                        onClick={(() => this.onButtonClicked(i))}
                        type="button" style={{margin: 5}}
                        className={this.props.selected_parameter === i ? 'btn btn-success' : 'btn btn-primary'}
                        key={this.props.pair_parameters[i]}>{keyName}
                    </button>
                )
            })
        )
    }
}


export default retrieved_info;







