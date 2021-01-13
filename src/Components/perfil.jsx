import React from 'react';

const Perfil = (props) => {
  return (
    <div className='container'>
      <div className={'card mt-5'}>
        <div className={'row'}>
          <div className={'col-3 p-5'}>
            <img
              src={props.perfil.imgUrl}
              alt='xD'
              className={'rounded-circle border border-4'}
              style={{ width: '100%' }}
            />
          </div>
          <div className={'col-9  align-middle'}>
            <div className={'card-body  '}>
              <h1 className={'card-title display-3 '}>
                Perfil de {props.perfil.nombre}, {props.perfil.apellido}
              </h1>
              <h3 className={'card-text display-4 '}>
                Monto total gastado: {props.perfil.gastoTotal}
              </h3>
              <h3 className={'card-text display-4 '}>
                Cantidad de compras: {props.perfil.comprasTotales}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
