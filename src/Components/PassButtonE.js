import '../App.css';
import React from 'react';

class PassButtonE extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div>
                <button className="btn bg-orange text-white px-5 mt-3 mb-3 shadow-sm" onClick={this.props.onClick}>
                pass [e]
                </button>
            </div>

        );
    }
}

export default PassButtonE;