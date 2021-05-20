import '../App.css';
import React from 'react';

class BodyPartInput extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            
            this.props.type=="throw-in"?
            null
            :
            <div className="mr-3 form-inline">
                <label className="mr-2 text-white" for="body-part">body part:</label>

                <select className="form-control" name="body-part" id="body-part" defaultValue={this.props.bodyPart} onChange={this.props.onChange}>
                    <option value="head" selected={this.props.bodyPart=="head"?"selected":null}>head</option>
                    <option value="right-foot" selected={this.props.bodyPart=="right-foot"?"selected":null}>right foot</option>
                    <option value="left-foot" selected={this.props.bodyPart=="left-foot"?"selected":null}>left foot</option>

                </select>
            </div>
        );
    }
}

export default BodyPartInput;