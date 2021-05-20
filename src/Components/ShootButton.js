import '../App.css';
import React from 'react';

class ShootButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div>
                <button className="btn bg-orange text-white px-5 mt-3 shadow-sm " onClick={this.props.onClick}>
                shot [s]
                </button>
            </div>

        );
    }
}

export default ShootButton;