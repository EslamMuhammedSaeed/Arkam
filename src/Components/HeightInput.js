import '../App.css';
import React from 'react';

class HeightInput extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        
        return (
            this.props.event=="shoot"?
            
            null
            :
            <div className="mr-3 form-inline">
                <label className="mr-2 text-white" for="height">height:</label>

                <select className="form-control" name="height" id="height" defaultValue={this.props.height} onChange={this.props.onChange}>
                    <option value="high" selected={this.props.height=="high"?"selected":null}>high</option>
                    <option value="low" selected={this.props.height=="low"?"selected":null} >low</option>
                    {this.props.type=="throw-in"? null:<option value="ground" selected={this.props.height=="ground"?"selected":null}>ground</option> }
                    

                </select>
            </div>
            

        );
    }
}

export default HeightInput;