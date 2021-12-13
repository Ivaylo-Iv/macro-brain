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
    };
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onSubmit = (e) => {
    this.setState({ imgURL: this.state.input });

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function (response) {
        console.log(
          response.outpits[0].data.regions[0].region_info.bounding_box
        );
      },
      function (err) {}
    );
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
        <ImgDisplay imgLink={this.state.imgURL} />
      </div>
    );
  }
}

export default App;
