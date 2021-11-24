import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider } from '@web3-react/core';
import {getLibrery} from './config/web3'


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ChakraProvider>
        <web3ReactProvider getLibrery={getLibrery}>
        <App />
        </web3ReactProvider>
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
