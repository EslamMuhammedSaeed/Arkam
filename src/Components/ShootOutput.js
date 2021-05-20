import '../App.css';
import React from 'react';

class ShootOutput extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
         <div>
            <div> event : shoot</div>
            <div>{this.props.type}</div>
            <div>{this.props.bodyPart}</div>
            <div>{this.props.extras}</div>
            
        </div>

        );
    }
}

export default ShootOutput;