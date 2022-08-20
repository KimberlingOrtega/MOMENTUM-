import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Menu } from "./component/menu";
import { Footer } from "./component/footer";

import { Cotizacion } from "./pages/Cotizacion-contacto";
import { Moda } from "./pages/Moda";
import { food } from "./component/Food";
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="min-h-screen w-screen">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Menu />

          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
            {/* <Route element={<Boda />} path="/boda" />
            <Route element={<Biografia />} path="/biografia" />
            <Route element={<evento />} path="/evento" />
            <Route element={<Cocina />} path="/cocina" /> */}
            {/* <Route element={<Corporativo />} path="/corporativo" /> */}
            <Route element={<Moda />} path="/fashion" />
            <Route element={<Cotizacion />} path="/quotation" />
          </Routes>

          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
