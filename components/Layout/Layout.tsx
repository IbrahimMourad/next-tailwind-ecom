import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { CartContextProvider } from "@/context/CartContext";
import Navbar from "../Navbar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Home |" }: Props) => (
  <CartContextProvider>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Navbar />
    <main>{children}</main>
    {/* Footer */}
  </CartContextProvider>
);

export default Layout;
