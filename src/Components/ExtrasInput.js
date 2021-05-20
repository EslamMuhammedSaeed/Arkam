import '../App.css';
import React from 'react';

class ExtrasInput extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            
            this.props.event=="shoot"?
            <div className="mr-3 form-inline ">
                <label className="mr-md-2 text-white" for="extras">extras:</label>

                <select className="form-control" name="extras" id="extras" onChange={this.props.onChange} multiple>
                    {this.props.bodyPart=="head"?<option value="aerial-won" selected={this.props.extras==="aerial-won"?"selected":null}>aerial won</option>:null}                    <option value="deflected" selected={this.props.extras==="deflected"?"selected":null}>deflected</option>
                    <option value="first-time" selected={this.props.extras==="first-time"?"selected":null}>first time</option>
                    <option value="redirect" selected={this.props.extras==="redirect"?"selected":null}>redirect</option>
                
                </select>
            </div>
            :
            <div className="mr-3 form-inline text-white">
                <label className="mr-md-2 text-white" for="extras">extras:</label>

                <select className="form-control" name="extras" id="extras" onChange={this.props.onChange} multiple>
                    {this.props.bodyPart=="head"?<option value="aerial-won" selected={this.props.extras==="aerial-won"?"selected":null}>aerial won</option>:null}
                    {this.props.bodyPart=="head"?null:<option value="back-heel" selected={this.props.extras==="backheel"?"selected":null}>backheel</option>}
                </select>
            </div>
            
        );
    }
}

export default ExtrasInput;