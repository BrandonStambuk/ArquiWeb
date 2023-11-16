import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ImageSection.css';

function About() {
  return (
    <div className="container-imagen-aloe">
      <div className="row justify-content-center align-items-center vh-100 imagen-aloe">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Título de la tarjeta</h5>
              <p className="card-text">Contenido de la tarjeta.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            {/* Agrega tu imagen dentro del cuerpo de la tarjeta */}
            <img src="ruta_de_la_imagen.jpg" className="card-img-top" alt="Imagen Aloe" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;