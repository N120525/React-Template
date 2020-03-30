import "./base.scss";
import App from "./app";
import React from "react";
import ReactDom from "react-dom";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { I18nextProvider } from "react-i18next";

import i18n from "./i18n";

ReactDom.render(
  <I18nextProvider>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App i18n={i18n}/>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </I18nextProvider>,
  document.getElementById("root")
);
