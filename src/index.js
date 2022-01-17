import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

// Import ThirdWeb
import { ThirdwebWeb3Provider} from '@3rdweb/hooks';

// Include what chain you wanna support 
// 4 = rinkeby
const supportChainIds = [4];

// Include the type of wallet you want to support 
// we supporting metamask wallet which is an "injected walllet"

const connectors = {
  injected: {},
}



// Render the App component to the DOM with ThirdwebWeb3Provider
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider connectors={connectors} supportChainIds={supportChainIds}>
      <App />
    </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
