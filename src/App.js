import React from 'react';
import RoutesNav from './Components/routesNav';
import generateStore from './Redux/store';
import { Provider } from 'react-redux';
import Footer from './Components/footer';

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <RoutesNav />
        </header>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </Provider>
  );
}

export default App;
