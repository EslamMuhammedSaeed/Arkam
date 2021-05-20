import '../App.css';
import React from 'react';

class TypeInput extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            
            this.props.event=="shoot"?
            <div className="mr-3 form-inline ">
                <label className="mr-md-2 text-white" for="type">type:</label>

                <select className="form-control" name="type" id="type" defaultValue={this.props.type} onChange={this.props.onChange}>
                    <option value="open-play" selected={this.props.type==="open-play"?"selected":null}>open play</option>
                    <option value="free-kick" selected={this.props.type==="free-kick"?"selected":null}>free kick</option>
                    <option value="penalty" selected={this.props.type==="penalty"?"selected":null}>penalty</option>
                    <option value="corner" selected={this.props.type==="corner"?"selected":null}>corner</option>
                
                </select>
            </div>
            :
            <div className="mr-3 form-inline text-white">
                <label className="mr-2" for="type">type:</label>

                <select className="form-control" name="type" id="type" onChange={this.props.onChange}>
                    <option value="open-play" selected={this.props.type==="open-play"?"selected":null}>open play</option>
                    <option value="kick-off" selected={this.props.type==="kick-off"?"selected":null}>kick off</option>
                    <option value="throw-in" selected={this.props.type==="throw-in"?"selected":null}>throw in</option>
                    
                
                </select>
            </div>
            
        );
    }
}

export default TypeInput;