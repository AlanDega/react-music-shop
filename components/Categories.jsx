import React from "react";
import Link from "next/link";

import "../css/custom.css";

function Categories() {
  return (
    <>
      <div className="container-fluid">
        <div className="row" id="categories">
          <div className="col-3" id="category1">
            <strong>Guitarras</strong>
            <div class="photobox photobox_type24">
              <div class="photobox__previewbox">
                <img
                  src="https://res.cloudinary.com/dalnnaod7/image/upload/v1587063231/giancarlo-duarte-cTj8vbZeX44-unsplash_1_pzilsu.jpg"
                  class="photobox__preview"
                  alt="Preview"
                />
                <span className="photobox__label">
                  <Link href="/fender">
                    <button type="button" className="btn btn-primary">
                      Ver más
                    </button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="col-3" id="category1">
            <strong>Teclados</strong>
            <div class="photobox photobox_type24">
              <div class="photobox__previewbox">
                <img
                  src="https://res.cloudinary.com/dalnnaod7/image/upload/v1587058518/douglas-bagg-xrETLANSskE-unsplash_xaddo9.jpg"
                  class="photobox__preview"
                  alt="Preview"
                />
                <span className="photobox__label">
                  <button type="button" className="btn btn-primary">
                    Ver más
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="col-3" id="category1">
            <strong>Baterias</strong>
            <div class="photobox photobox_type24">
              <div class="photobox__previewbox">
                <img
                  src="https://res.cloudinary.com/dalnnaod7/image/upload/v1587058524/olivia-connell-tAMT6JFENNY-unsplash_nchm9x.jpg"
                  class="photobox__preview"
                  alt="Preview"
                />
                <span className="photobox__label">
                  <button type="button" className="btn btn-primary">
                    Ver más
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <strong>Tocadiscos</strong>
            <div class="photobox photobox_type24">
              <div class="photobox__previewbox">
                <img
                  height="90%"
                  width="100%"
                  src="https://res.cloudinary.com/dalnnaod7/image/upload/v1587063036/dmitry-bayer-k7o3XgJFIWI-unsplash_szcd1j.jpg"
                  class="photobox__preview"
                  alt="Preview"
                />
                <span className="photobox__label">
                  <button type="button" className="btn btn-primary">
                    Ver más
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
