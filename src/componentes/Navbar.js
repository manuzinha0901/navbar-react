import React, { useState } from "react";

import "./Navbar.scss";

const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  return (
    <div className="Navbar">
      <nav>
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <a href="/">Home</a>
        <a href="/">onde Comprar</a>
        <a href="/">Bejuterias</a>
        <a href="/">Tendencias</a>
      </section>
    </div>
  );
};
export default Navbar;
