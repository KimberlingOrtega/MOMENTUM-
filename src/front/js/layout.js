import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Menu } from "./component/menu";
import { Footer } from "./component/footer";

import { Inicio } from "./pages/inicio";
import { Biografia } from "./pages/biografia";
import { Boda } from "./pages/boda";
import { Evento } from "./pages/evento";
import { Comida } from "./pages/comida";
import { Corporativo } from "./pages/corporativo";
import { Moda } from "./pages/moda";
import { Cotizacion } from "./pages/cotizacion";
import { Datos } from "./pages/datos";
import { Clientes } from "./pages/clientes";
import { Admin } from "./pages/admin";
import { Trabajos } from "./pages/trabajos";
import { Prueba } from "./pages/prueba";
import { Cotizacionlogin } from "./pages/cotizacionlogin";
import { CotizacionesSolicitadas } from "./pages/cotizacionsolicitada";
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
            <Route element={<Inicio />} path="/" />
            <Route element={<Biografia />} path="/biografia" />
            <Route element={<Boda />} path="/boda" />
            <Route element={<Evento />} path="/evento" />
            <Route element={<Comida />} path="/comida" />
            <Route element={<Corporativo />} path="/corporativo" />
            <Route element={<Moda />} path="/moda" />
            <Route element={<Cotizacion />} path="/cotizacion" />
            <Route element={<Datos />} path="/datos" />
            <Route
              element={<CotizacionesSolicitadas />}
              path="/cotizaciones-solicitadas"
            />
            <Route element={<Clientes />} path="/clientes" />
            <Route element={<Admin />} path="/admin" />
            <Route element={<Trabajos />} path="/trabajos" />
            <Route element={<Prueba />} path="/prueba" />
            <Route element={<Cotizacionlogin />} path="/nuevacotizacion" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>

          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
