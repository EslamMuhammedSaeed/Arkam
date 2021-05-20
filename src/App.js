
import './App.css';

import React from 'react';
import TypeInput from './Components/TypeInput';
import HeightInput from './Components/HeightInput';
import BodyPartInput from './Components/BodyPartInput';
import ShootButton from './Components/ShootButton';
import PassButton from './Components/PassButton';
import PassButtonE from './Components/PassButtonE';
import ExtrasInput from './Components/ExtrasInput';
import Output from './Components/Output';


class App extends React.Component {
    constructor(props) {
        super(props)
    }
    
    
    state = {
      eventButton : "pass",
      type : "open-play" ,
      bodyPart : "right-foot"  ,
      extras : [] ,
      height : "ground" ,
    };
    setEventShoot = () =>{
      this.setState({
        ...this.state,
        eventButton : "shoot",
      });
    }
    setEventPassW = () =>{
      this.setState({
        ...this.state,
        eventButton : "pass",
        height : "ground",
        type : "open-play",
      });
    }
    setEventPassE = () =>{
      this.setState({
        ...this.state,
        eventButton : "pass",
        height : "low"
      });
    }
    setEvent = (Event) =>{
      this.setState({
        ...this.state,
        eventButton : Event,
      });
    }
    setType = (event)=>{
      this.setState({
        ...this.state,
        type : event.target.value,
      });
    }
    setBodyPart = (event)=>{
      this.setState({
        ...this.state,
        bodyPart : event.target.value,
      });
    }
    setHeight = (event)=>{
      this.setState({
        ...this.state,
        height : event.target.value,
      });
    }
    setExtras = (event)=>{
      var options = event.target.options;
      var value = [];
      for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      this.setState({
        ...this.state,
        extras : value,
      });
      console.log(value);
    }
    
    shortcutHandler=(event)=>{
      if(event.code == "KeyW"){
        this.setState({
          ...this.state,
          eventButton :"pass",
          height : "ground",
          type : "open-play"
        });
      }
      else if(event.code == "KeyE"){
        this.setState({
          ...this.state,
          eventButton :"pass",
          height : "low",
        });
      }
      else if(event.code == "KeyS"){
        this.setState({
          ...this.state,
          eventButton : "shoot",
       });
      }
    }
    handleSubmit=()=>{
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
      var tag = document.createElement("div");
      
      tag.setAttribute("class", "card text-dark mb-2 mx-1");
      var tag2 = document.createElement("div");
      tag2.setAttribute("class", "card-header pt-1 pb-0");
      var tag3 = document.createElement("h4");
      tag3.setAttribute("class", "card-title");
      var event = document.createTextNode(this.state.eventButton);
      tag3.appendChild(event);
      tag2.appendChild(tag3);
      tag.appendChild(tag2);

      var tag4 = document.createElement("div");
      tag4.setAttribute("class", "card-body pt-1 pb-1");
      var tagp1 = document.createElement("p");
      tagp1.setAttribute("class", "card-text mb-1");
      var type = document.createTextNode("type: "+this.state.type);
      tagp1.appendChild(type);
      var tagp2 = document.createElement("p");
      tagp2.setAttribute("class", "card-text mb-1");
      var height = document.createTextNode("height: "+this.state.height);
      tagp2.appendChild(height);
      var tagp3 = document.createElement("p");
      tagp3.setAttribute("class", "card-text mb-1");
      var bodyPart = document.createTextNode("body part: "+this.state.bodyPart);
      tagp3.appendChild(bodyPart);
      var tagp4 = document.createElement("p");
      tagp4.setAttribute("class", "card-text mb-1");
      var extras = document.createTextNode("extras: "+this.state.extras);
      tagp4.appendChild(extras);
      tag4.appendChild(tagp1);
      tag4.appendChild(tagp2);
      tag4.appendChild(tagp3);
      tag4.appendChild(tagp4);
      tag.appendChild(tag4);
      

      tag.setAttribute("bodyPart", this.state.bodyPart);
      // var text = document.createTextNode("Tutorix is the best e-learning platform");
      // tag.appendChild(text);
      var outputContainer = document.getElementById("output");
      var hh = document.getElementById("hh");
      // var output = "ya moshl";
      
      outputContainer.appendChild(tag);
      console.log("hello");
    }    
    

    componentDidMount() {
      document.addEventListener("keypress",this.shortcutHandler);
    }
    render() {
            return (
         
          <div className="container-fluid px-0" >
          <div className="text-center py-4 bg-white shadow-sm container-fluid">
              <img width="150px" src="logo.png"></img>
          </div>
          
          <div className="row py-3 pl-3 bg-orange shadow-sm container-fluid mx-0">
              <div className="col-md-5 px-md-5 px-0 mt-md-4 pt-md-2"> 
                  <TypeInput onChange={this.setType} event={this.state.eventButton} type={this.state.type}></TypeInput>
              </div>
              <div className="col-md-7 px-3">
                  <div className="row ">
                  
                      <HeightInput  onChange={this.setHeight} event={this.state.eventButton} type={this.state.type} height={this.state.height}></HeightInput>
                      <BodyPartInput onChange={this.setBodyPart} type={this.state.type} bodyPart={this.state.bodyPart}></BodyPartInput>
                      <ExtrasInput onChange={this.setExtras} event={this.state.eventButton} bodyPart={this.state.bodyPart}></ExtrasInput>
                      <button className="btn btn-dark ml-4" onClick={this.handleSubmit} >submit</button>
                  </div>
              </div>
          </div>
          
          
          
          
            
          <div className="row container-fluid pr-0 mr-0">
            <div className="col-md-2 events-container text-center ">
                
                  <ShootButton onClick={this.setEventShoot}></ShootButton>
                  <PassButton onClick={this.setEventPassW}></PassButton>
                  <PassButtonE onClick={this.setEventPassE}></PassButtonE>
                  
                
            </div>
            
          </div>
          <div id="output" className="row py-3 pl-3 bg-orange shadow-sm container-fluid mx-0 text-white">
              <Output id="hh" event={this.state.eventButton} 
                      type={this.state.type} 
                      height={this.state.height} 
                      bodyPart={this.state.bodyPart} 
                      extras={this.state.extras}>
              </Output>
          {/* {output} */}

          </div>  
              {/* {this.state.eventButton} */}
              
              
              
              

            
          </div>
        );
    }
}

export default App;
