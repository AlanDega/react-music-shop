import React from 'react';

import '../css/custom.css';

export default function Promociones() {
    return (
      <section className="promociones">
        <div className="row justify-content-center">
          <h1 className="pro">Promociones</h1>
        </div>
        <div className="row justify-content-center">
          <hr className="style2" />
        </div>
        <div className="row justify-content-center">
          <video className="vid" height="400" width="800" controls>
            <source
              src="https://res.cloudinary.com/dalnnaod7/video/upload/v1587034700/video_1_ou39e0.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
    );
}
