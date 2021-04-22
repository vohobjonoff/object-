import React from "react";
import ReactDOM, { render } from "react-dom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navigation from "./components/NavBar/Navigation";


const App = () => {

  const sampleJson = {
    "object": {
      "name": "Ihtiyor",
      "number": 1,
      "address": "Uzbekistan",
      "Website": "https://idroktalim.uz"
    }
  }


  return (
    <React.StrictMode>
      <Navigation />
      <p>{sampleJson.object.name}</p>
      <p>{sampleJson.object.address}</p>
      {/* {
        Object.keys(sampleJson.Object).map((key, i) => {
          <p key={i}>
            <span>Key Name: {key}</span>
            <span>Value: {sampleJson.object[key]} </span>
          </p>
        })
      } */}

      <Main />
      <Footer />
    </React.StrictMode>
  );
};

render(React.createElement(App), document.getElementById("root"));
