import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalContextProvider } from "./Context/globalcontext.jsx";
import { TodoContextProvider } from "./Context/todoContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>
);
