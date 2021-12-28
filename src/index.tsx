import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthProvider from "./providers/Auth.Provider";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
