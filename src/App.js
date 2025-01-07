import React, { Component } from "react";
import Navigation from "./Components/Navigation/Navigation"
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition"
import Signin from "./Components/Signin/Signin"
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import "tachyons";
import './App.css';


class App extends Component {
  constructor () {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      boxes: [],
      imageBox: "",
      isSignedIn: false,
      route: "signin"
    }
  }


//CALCULATE PARAMETERS OF FACE BOX-------------------------------------------------
  faceCalculate = (data) => {
    
    if(data) {

      return data.map(face => {
        const clarifaiFaceLeftCol = face.left_col;
        const clarifaiFaceTopRow = face.top_row;
        const clarifaiFacRightCol = face.right_col;
        const clarifaiFaceBottomRow = face.bottom_row;

        const image = document.getElementById("inputImage");
        const width = Number(image.width);
        const height = Number(image.height);

        return {
          leftcol: clarifaiFaceLeftCol * width,
          toprow: clarifaiFaceTopRow * height,
          rightcol: width - (clarifaiFacRightCol * width),
          bottomrow: height - (clarifaiFaceBottomRow * height)
        }
      })
    }
  return;
  }



//INSERT THE BOX ITSELF-------------------------------------------------
  displayFaceBoxes = (boxes) => {
    this.setState({boxes: boxes});
  }


//WHAT HAPPEBS WHEN WE CHANGE THE INPUT?-------------------------------------------------
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }


//WHAT HAPPEBS WHEN WE CLICK THE BUTTON?-------------------------------------------------
  onButtonSubmit = () => {

  //clarifai code-----------------------------
    this.setState({imageUrl: this.state.input})
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
          }) 
        };

    
    fetch("https://hamzara2a.pythonanywhere.com/predict", requestOptions)
    .then(response => response.json())
    .then(result => {
      this.displayFaceBoxes(this.faceCalculate(result))
    })
    .catch(error => console.log('error', error));

     //end of clarifai code-----------------------------

  }

//WHAT TO DISPLAY WHEN OUR ROUTE CHANGES-------------------------------------------
  onRouteChange = (route) => {
    if (route === "signout" || route === "signin") {
      this.setState(
        {
        input: "",
        imageUrl: "",
        boxes: [],
        imageBox: "",
        isSignedIn: false,
        route: "signin"
      }
      )
    } else if (route === "home") {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }


//RENDER EVERYTHING NOW!-------------------------------------------
  render() { 
    const { route, isSignedIn, imageUrl, boxes } = this.state;

    return (
      
      <div className="App">
        
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
      { route === "home" 
      ? <div className ="mv7">
          <ImageLinkForm 
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
          />

          <FaceRecognition boxes={boxes} imageUrl={imageUrl} />

        </div> 
      : (
         <Signin onRouteChange={this.onRouteChange}/>
       )
        
      
      } 
      </div>
      
    );

  }

}
export default App;

