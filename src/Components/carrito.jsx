import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { eliminarDelCarro, pagar } from '../Redux/tiendaDuck';
const Carrito = () => {
  const props = useSelector((store) => store.tienda);
  console.log(props);
  const dispatch = useDispatch();
  console.log(props.compraActual.productos.length);
  return (
    <div className='container'>
      <h2 className='mt-3'>Productos en el carrito</h2>
      <div className='row'>
        <div className='col-6'>
          {props.compraActual.productos.map((item) => (
            <div className='card mt-3'>
              <div className='card-body'>
                <img
                  src={item.imgUrl}
                  className={' img-thumbnail  '}
                  style={{ width: '20%' }}
                  alt=''
                />
                <h5 className='card-title pl-2' style={{ display: 'inline' }}>
                  {item.nombre}
                  {'       '}
                  <button
                    onClick={() => dispatch(eliminarDelCarro(item))}
                    className={'btn btn-danger p-4'}
                    style={{ marginTop: '20px', marginLeft: '20px' }}
                  >
                    Eliminar
                  </button>
                </h5>
                <p className={'card-text'}>
                  Precio del articulo: {item.precio}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='col mt-3'>
          <div className='card'>
            <div className='card-body'>
              <h2 className={'display-4'}>
                {' '}
                Precio total: {props.compraActual.precioTotal}
              </h2>
              <div class='d-grid gap-2 d-md-flex justify-content-md-end'>
                <button
                  onClick={() => dispatch(pagar())}
                  className={'btn btn-primary btn-lg'}
                  disabled={
                    props.compraActual.productos.length < 1 ? 'true' : ''
                  }
                  type='button'
                >
                  Pagar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
