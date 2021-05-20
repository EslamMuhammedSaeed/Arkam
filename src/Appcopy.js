import logo from './logo.svg';
import './App.css';
import {pass,shot} from './eventsSpec.js';
import {useEffect,useRef} from 'react';
import React from 'react';
import PassFields from './Components/PassFields';
import ShootFields from './Components/ShootFields';
import PassOutput from './Components/PassOutput';
import ShotOutput from './Components/ShotOutput';
import TypeInput from './Components/TypeInput';


class App extends React.Component {
    constructor(props) {
        super(props)
    }
    
    
    state = {
      eventButton : "pass",
      type : "open_play" ,
      bodyPart : "right-foot"  ,
      extras : "aerial-won" ,
      height : "ground" ,
      passFields : pass.fields,
      shotFields :shot.fields,
    };

    setEvent = (par) =>{
      this.setState({
        ...this.state,
        eventButton : par,
      });
    }
    setType = (event)=>{
      this.setState({
        ...this.state,
        type : event.target.value,
      });
    }
    setBodyPart = (bodyPart)=>{
      this.setState({
        ...this.state,
        bodyPart : bodyPart,
      });
    }
    setExtras = (extras)=>{
      this.setState({
        ...this.state,
        extras : extras,
      });
    }
    setHeight = (height)=>{
      this.setState({
        ...this.state,
        height : height,
      });
    }
    shortcutHandler=(event)=>{
      if(event.code == "KeyW"){
        this.setState({
          ...this.state,
          height : "ground",
          type : "open-play"
        });
      }
      else if(event.code == "KeyE"){
        this.setState({
          ...this.state,
          height : "low",
        });
      }
      else if(event.code == "KeyS"){
        this.setState({
          ...this.state,
          eventButton : "shot",
        });
    }
  }    
    

    componentDidMount() {
      document.addEventListener("keypress",this.shortcutHandler);
    }
    render() {
      
        if(this.state.eventButton=="shot"){
          var typeField=<div>
            

            
          </div>;
          var bodyPartField=<div>
          <label for="body-part">body part:</label>

          <select name="body-part" id="body-part" onChange={(event)=>this.setBodyPart(event.target.value)}>
              <option value="head">head</option>
              <option value="right-foot">right-foot</option>
              <option value="left-foot">left-foot</option>
          
          </select>
        </div>;
          var output =  <ShotOutput type={this.state.type} 
                                  extras={this.state.extras} 
                                  bodyPart={this.state.bodyPart} >   
                        </ShotOutput>;
        }
        else if(this.state.eventButton=="pass"){
          var typeField=<div>
          <label for="type">type:</label>

          <select name="type" id="type" onChange={(event)=>this.setType(event.target.value)}>
              <option value="open-play">open play</option>
              <option value="kick-off">kick off</option>
              <option value="throw-in">throw in</option>
          
          </select>
        </div>;
        if(this.state.type=="throw-in"){
          var bodyPartField= null;
        }else{
          var bodyPartField=
          <div>
          
          
          <label for="body-part">body part:</label>

          <select name="body-part" id="body-part" onChange={(event)=>this.setBodyPart(event.target.value)}>
              <option value="head">head</option>
              <option value="right-foot">right-foot</option>
              <option value="left-foot">left-foot</option>
          
          </select>
        </div>;
        }
        var heightField=
        <div>
          <label for="height">height:</label>

          <select name="height" id="height" onChange={(event)=>this.setHeight(event.target.value)}>
              <option value="high">high</option>
              <option value="low">low</option>
              {this.state.type=="throw-in"? null:<option value="ground">ground</option> }
              
          
          </select>
        </div>;
          var output =  <PassOutput type={this.state.type} 
                              height={this.state.height} 
                              extras={this.state.extras} 
                              bodyPart={this.state.bodyPart} >   
                        </PassOutput>;
        }

        return (
         
          <div >
          <div className="container">
          <TypeInput onChange={this.setType}></TypeInput>

            {this.state.eventButton}
            <button className="btn btn-primary" onClick={()=>{this.setEvent("shot");}}>
              shot
            </button>
            <button onClick={()=>{this.setEvent("pass");}}>
              pass
            </button>
            
            {typeField}
            {bodyPartField}
            {heightField}
            {output}

          </div> 
          </div>
        );
    }
}

export default App;
