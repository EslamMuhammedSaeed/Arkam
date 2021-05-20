import '../App.css';
import React from 'react';

class Output extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
         <div>
            <div class="card text-dark">
                <div class="card-header pt-1 pb-0">
                    <h4 class="card-title">{this.props.event}</h4>
                </div>
                <div class="card-body pt-1 pb-1">
                    <p class="card-text mb-1">type : {this.props.type}</p>
                    <p class="card-text mb-1">height : {this.props.height}</p>
                    <p class="card-text mb-1">body part : {this.props.bodyPart}</p>
                    
                    <p class="card-text mb-1">extras : {this.props.extras}</p>
                    
                </div>
            </div>
            {/* <div> event : pass</div>
            <div>{this.props.type}</div>
            <div>{this.props.height}</div>
            <div>{this.props.extras}</div>
            <div>{this.props.bodyPart}</div> */}
        </div>

        );
    }
}

export default Output;