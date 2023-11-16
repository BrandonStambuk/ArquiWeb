import React, { useEffect, useState } from 'react';
import imagen2 from '../images/jardin2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ImageSection.css';
import Navbar from './Navbar';

function ImageSection() {
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.src = imagen2;

    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
    };
  }, []);

  const heightVW = 60; // Altura en porcentaje del ancho de la ventana

  // Calcular la altura en vw (viewport width)
  const adjustedHeightVW = (window.innerWidth * heightVW) / 100;

  const backgroundImageStyle = {

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: `${adjustedHeightVW}px`, // Altura en vw
    width: '100%', 
    background: `rgba(0, 0, 0, 0.7) url(${imagen2}) center/cover no-repeat`,
  };

  return (

    <div className="container-fluid p-0">

      <div className="row">
        <div className="col-12 position-relative bg-secondary">
          <div style={backgroundImageStyle} className='image-jardin'>
            <div className='col-md-6 col-sm-12 d-flex align-items-left justify-content-left'>
              <div className='titulito'>
                <h1>Descubre la belleza natural</h1>
                <p>Explora un oasis de plantas exóticas y disfruta de la tranquilidad del Jardín Martín Cardenas
                    <br></br>Ubicado en la ciudad de Cochabamba Bolivia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
