import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../store";
import "normalize.css";
import "antd/dist/antd.css";



import Calendar from "./calendar";
import theme from "../theme";


const Main = () => (
 <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Calendar />
      </ThemeProvider>
</PersistGate>
</Provider>
);

export default Main;

