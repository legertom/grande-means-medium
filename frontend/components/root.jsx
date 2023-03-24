import React from "react";
import { Provider } from "react-redux";
import { HashRouter , BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from "recoil";
import App from "./App";
import StateContextProvider from "../context/StateContextProvider";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <RecoilRoot>
      <HashRouter>
        {/* <BrowserRouter> */}
          <StateContextProvider>
            <App />
          </StateContextProvider>
        {/* </BrowserRouter> */}
        </HashRouter>
      </RecoilRoot>
    </Provider>
  );
};

export default Root;
