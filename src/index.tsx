import * as React from "react";
import * as ReactDOM from "react-dom";
// import App from './App';
// import Hello from './components/Hello';
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import { enthusiasm } from "./reducers/index";
import { IStoreState } from "./types/index";
import Hello from "./containers/Hello";
import { Provider } from "react-redux";
import { EnthusiasmAction } from './actions/index';

const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  name: "TypeScript"
});

ReactDOM.render(
  // <App />,
  // <Hello name="TypeScript" enthusiasmLevel={10} />,
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
