import React from "react";
import Navigation from "../components/Navigation";
import ImgLinkForm from "../components/ImgLinkForm";
import BG from "../components/BG";
import Clarifai from "clarifai";
import ImgDisplay from "../components/ImgDisplay";

const app = new Clarifai.App({
  apiKey: "271ea27eb02c4903ba1eb80f0523c6ed",
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgURL: "",
      displayImg: "none",
      box: {},
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const widthImg = Number(image.width);
    const heightImg = Number(image.height);
    console.log(widthImg, heightImg);
    return {
      leftCol: clarifaiFace.left_col * widthImg,
      topRow: clarifaiFace.top_row * heightImg,
      rightCol: widthImg - clarifaiFace.right_col * widthImg,
      bottomRow: heightImg - clarifaiFace.bottom_row * heightImg,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onSubmit = (e) => {
    this.setState({ imgURL: this.state.input, displayImg: "block" });
    console.log(1);
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL /*"53e1df302c079b3db8a0a36033ed2d15"*/,
        this.state.input
      )
      .then((response) =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <BG className="part" />
        <Navigation />

        <ImgLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <ImgDisplay
          imgLink={this.state.imgURL}
          displayI={this.state.displayImg}
          box={this.state.box}
        />
      </div>
    );
  }
}

export default App;
