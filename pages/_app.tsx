import React from "react";
import { AppProps } from "next/app";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/index.css";
import { CartContextProvider } from "@/context/CartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}

export default MyApp;
