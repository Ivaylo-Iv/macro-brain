import React from "react";
import Navigation from "../components/Navigation";
import ImgLinkForm from "../components/ImgLinkForm";
import BG from "../components/BG";

function App() {
  return (
    <div className="App">
      <BG className="part" />
      <Navigation />

      <ImgLinkForm />
    </div>
  );
}

export default App;
