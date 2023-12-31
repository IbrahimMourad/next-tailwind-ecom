import React, { ReactNode } from "react";
import Head from "next/head";

import Navbar from "../Navbar";
import Footer from "../Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Home |" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Simple ecommerce for furniture store" />
    </Head>

    <Navbar />
    <main className="mt-[61px] ">{children}</main>
    <Footer />
  </>
);

export default Layout;
