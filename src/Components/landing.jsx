import React from 'react';
import ReactDOM, { Link } from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Landing = (props) => {
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-7'>
          <Carousel>
            {props.productos.map((item) => (
              <div className={' p-3'}>
                <a href='/productos'>
                  <img src={item.imgUrl} className={'rounded'} alt='xD' />
                  <p className={'legend'}>{item.nombre}</p>
                </a>
              </div>
            ))}
          </Carousel>
        </div>
        <div className='col-5'>
          <div className='card'>
            <div className='p-3'>
              {' '}
              <h2 className={'display-4'}>Sobre nosotros</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                obcaecati porro mollitia, dolore neque minus ducimus tempora
                dignissimos quidem rerum corrupti repellendus, illum cum
                quibusdam! Sed debitis accusantium quam dolorem?
              </p>
            </div>
          </div>
          <div className='card mt-3'>
            <div className='p-3'>
              <h2 className={'display-4'}>Direccion</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                autem a voluptatibus nam, odio dolorem quam odit, officia
                dolorum, nesciunt vel consectetur illum eos ex non quae
                repudiandae tempora dignissimos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
