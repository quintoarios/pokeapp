import * as React from "react";
import "../styles/globals.scss";

import { NextUIProvider } from "@nextui-org/react";
import  darkTheme  from "../themes/darkTheme";




function MyApp({ Component, pageProps }) {
  return (
  <NextUIProvider theme={darkTheme}>
    <Component {...pageProps} />
  </NextUIProvider>
  );
}

export default MyApp;
