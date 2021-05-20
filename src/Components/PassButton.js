import '../App.css';
import React from 'react';

class PassButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div>
                <button className="btn bg-orange text-white px-5 mt-3 shadow-sm" onClick={this.props.onClick}>
                pass [w]
                </button>
            </div>

        );
    }
}

export default PassButton;