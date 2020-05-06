import React, { useState } from "react";
import { PersonSquare } from "react-bootstrap-icons";


import "../css/custom.css";
import Categories from "../components/Categories.jsx";
import Promociones from "../components/Promociones.jsx";


const Index = () => {
  const [hovered, setHover] = useState(false);
  const [toggled, setToggle] = useState(false);

  const toggle = () => setToggle(!toggled);

  return (
    <>
      <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark ">
        <a class="navbar-brand" href="#">
          <img height="50" width="50" src="https://res.cloudinary.com/dalnnaod7/image/upload/v1587000246/lk_logo_hets9i.png" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto"></ul>
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <PersonSquare color="#12E165" size={30} />
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">
                <ArrowRight color="green" size={30} />
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
      <div className="container-fluid" id="hero">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="row" id="hero">
              <div className="col-5">
                <section className="row justify-content-start">
                  <div className="col-2">
                    <div className="row justify-content-end">
                      <strong>NOVEDADES</strong>
                    </div>
                  </div>
                  <div className="col-9">
                    <hr />
                  </div>
                </section>
                <section>
                  <div className="row justify-content-end">
                    <p className="h1">
                      El sintetizador EchoZoom ya esta a la venta
                    </p>
                  </div>
                </section>
                <section>
                  <div className="row justify-content-start">
                    <p>
                      Nuestro producto de la semana es el nuevo sintetizador
                      'Echozoom',
                      <br />
                      sin duda el mejor que tenemos en nuestro inventario y lo
                      puedes
                      <br />
                      obtener aquí hoy.
                    </p>
                  </div>
                </section>
                <section>
                  <div className="row justify-content-start">
                    <button
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                      type="button"
                      className={`${
                        hovered ? "btn btn-primary" : "btn btn-dark"
                      }`}
                    >
                      Ver detalles
                    </button>
                  </div>
                </section>
              </div>
              <div className="col-7">
                <img
                  className="img1"
                  height="400"
                  width="100%"
                  src="https://res.cloudinary.com/dalnnaod7/image/upload/v1587025456/analog-audio-mixer-3672355_xjwhde.jpg"
                />
              </div>
            </div>
            <div className="categories">
              <Categories />
            </div>
          </div>

          <div className="col-2"></div>
        </div>
        <section className="promo">
          <div className="row">
            <Promociones />
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
