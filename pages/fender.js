import React, { useState } from "react";
import { PersonSquare } from "react-bootstrap-icons";

import "../css/custom.css";


export default function Fender() {
    const images = [
      {
        title: "img1",
        url:
          "https://prod.fluidconfigure.com/imagecomposer/generate/?view=Front&recipe=1%2C0%2C0%2C1%2C0%2C1%2C4%2C0%2C1%2C5%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C1%2C4%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C-1%2C0%2C-1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C4%2C2%2C2%2C0%2C0%2C0%2C0%2C0%2C4%2C1%2C1%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0&apiKey=Fender-S1pirtOfRnRs1nc31946&workflow=prod&environment=prod&customerId=1547&productId=21536&configVersion=1585166322440&publishedTime=03%2F25%2F2020%2019%3A58%3A42&purpose=serverDisplay&format=png&trim=false&padding=0&scale=0.45&binary=true",
      },
      {
        title: "img2",
        url:
          "https://prod.fluidconfigure.com/imagecomposer/generate/?view=Front&recipe=1%2C0%2C25%2C1%2C0%2C1%2C4%2C0%2C1%2C5%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C1%2C4%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C-1%2C25%2C-1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C4%2C2%2C2%2C38%2C0%2C0%2C0%2C0%2C4%2C1%2C1%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0&apiKey=Fender-S1pirtOfRnRs1nc31946&workflow=prod&environment=prod&customerId=1547&productId=21536&configVersion=1585166322440&publishedTime=03%2F25%2F2020%2019%3A58%3A42&purpose=serverDisplay&format=png&trim=false&padding=0&scale=0.45&binary=true",
      },
      {
        title: "img3",
        url:
          "https://prod.fluidconfigure.com/imagecomposer/generate/?view=Front&recipe=1%2C0%2C3%2C1%2C0%2C1%2C4%2C0%2C1%2C5%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C1%2C4%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C-1%2C3%2C-1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C-1%2C0%2C4%2C2%2C2%2C3%2C0%2C0%2C0%2C0%2C4%2C1%2C1%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0&apiKey=Fender-S1pirtOfRnRs1nc31946&workflow=prod&environment=prod&customerId=1547&productId=21536&configVersion=1585166322440&publishedTime=03%2F25%2F2020%2019%3A58%3A42&purpose=serverDisplay&format=png&trim=false&padding=0&scale=0.45&binary=true",
      },
    ];
    const [image, setImage] = useState(images[0].url)

    return (
      <>
        <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark ">
          <a class="navbar-brand" href="#">
            <img
              height="50"
              width="50"
              src="https://res.cloudinary.com/dalnnaod7/image/upload/v1587000246/lk_logo_hets9i.png"
            />
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
        <div className="container title">
          <section className="row justify-content-center ">
            <h1>Diseña tú guitarra</h1>
          </section>
          <section className="row justify-content-center">
            <hr className="style3" />
          </section>
        </div>
        <div className="container">
          <div className="card maker">
            <div className="card-body">
              <section className="row">
                <div className="col-8">
                  <h2>Telecaster</h2>
                  <img src={image} />
                </div>
                <div className="col-4">
                  <section className="row justify-content-center">
                    <ul className="colors">
                      <li className="color">
                        <img
                          onClick={() => setImage(images[0].url)}
                          src="https://res.cloudinary.com/dalnnaod7/image/upload/v1587073138/black_pjkivm.png"
                          height="50"
                          width="50"
                        />
                      </li>
                      <li className="color">
                        <img
                          onClick={() => setImage(images[1].url)}
                          src="https://res.cloudinary.com/dalnnaod7/image/upload/v1587073137/red_xkhdpo.png"
                          height="50"
                          width="50"
                        />
                      </li>
                      <li className="color">
                        <img
                          onClick={() => setImage(images[2].url)}
                          src="https://res.cloudinary.com/dalnnaod7/image/upload/v1587073136/blue_znl3fn.png"
                          height="50"
                          width="50"
                        />
                      </li>
                    </ul>
                  </section>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
}
