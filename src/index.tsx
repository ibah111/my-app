import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { setupStore } from "./store/store.ts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = setupStore();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
