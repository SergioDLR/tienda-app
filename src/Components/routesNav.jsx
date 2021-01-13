import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Productos from './productos';
import Perfil from './perfil';
import Carrito from './carrito';
import Landing from './landing';

const RoutesNav = () => {
  const tienda = useSelector((store) => store.tienda);

  return (
    <Fragment>
      <Router>
        <div>
          <nav className='navbar navbar-expand-lg navbar-light  nav-class '>
            <div className='container  d-flex justify-content-center '>
              <div className='navbar-nav align-center  '>
                <Link className='navbar-brand nav-link' to='/miPerfil'>
                  Bienvenido: {tienda.miPerfil.nombre},{' '}
                  {tienda.miPerfil.apellido}
                </Link>

                <Link className='navbar-brand nav-link' to='/'>
                  Inicio
                </Link>

                <Link className='navbar-brand nav-link ' to='/productos'>
                  Productos
                </Link>

                <Link className='navbar-brand nav-link' to='/compraActual'>
                  <i className='fas fa-cart-arrow-down'>
                    <p
                      style={{
                        display: 'inline',
                        fontFamily: 'arial',
                        color: 'red',
                      }}
                    >
                      {tienda.compraActual.cantArticulos}
                    </p>
                  </i>
                </Link>
              </div>
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path='/miPerfil'>
              <Perfil perfil={tienda.miPerfil}></Perfil>
            </Route>
            <Route path='/productos'>
              <Productos productos={tienda.todosLosProductos}></Productos>
            </Route>
            <Route path='/compraActual'>
              <Carrito carrito={tienda.compraActual}></Carrito>
            </Route>
            <Route path='/'>
              <Landing productos={tienda.todosLosProductos}></Landing>
            </Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
};

export default RoutesNav;
