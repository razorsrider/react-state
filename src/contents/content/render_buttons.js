import React from 'react';

class render_buttons extends React.Component {
    state = {selected: 0};

    onButtonClicked = (val) => {
        if (this.state.selected !== val) {
            this.setState({
                selected: val
            })
        }
        this.props.onClick(val);
    };

    render() {
        return (
            this.props.market_filter_list.map((keyName, i) => {
                return <button
                    onClick={(() => this.onButtonClicked(i))}
                    type="button" style={{margin: 5}}
                    className={this.state.selected === i ? 'btn btn-success' : 'btn btn-primary'}
                    key={this.props.market_filter_list[i]}>{keyName}
                </button>
            })
        )
    }
}


export default render_buttons;