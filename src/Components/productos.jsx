import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {agregarAlCarrito} from '../Redux/tiendaDuck';
const Productos = (props) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState(0);
  const [mail, setMail] = useState('nul');

  return (
    <div className='container'>
      <h2 className={'mt-3'}>Productos disponibles</h2>
      <div className={'row'}>
        {props.productos.map((item) => (
          <div className='card col m-3' style={{width: '18'}} key={item.nombre}>
            <img
              src={item.imgUrl}
              className={'card-img-top p-3'}
              style={{height: 200}}
              alt=''
            />
            <div className={'card-body'}>
              <h5 className={'card-title'}>{item.nombre}</h5>
              <p className={'card-text'}>{item.descripcion}</p>
              <p className={'card-text'}>Precio: {item.precio}</p>
              <button
                className={'btn btn-primary'}
                onClick={() => dispatch(agregarAlCarrito(item))}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
