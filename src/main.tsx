import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import Routing from "./Routing.tsx";
import ConfigLoader from "./ConfigLoader.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <ConfigLoader>
          <Routing />
        </ConfigLoader>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
