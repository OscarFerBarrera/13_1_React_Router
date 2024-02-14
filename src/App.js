import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import MyAccount from './components/MyAccount';
import Login from './components/Login';
import Header from './components/Header/Header';

// Import clásico para componentes no lazy
// import Faqs from './components/Faqs';
// import About from './components/About';
// import NotFound from './components/NotFound';

// Importamos componentes lazy

const ProductsList = React.lazy(() => import("./components/ProductsList/ProductsList"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const ProductDetail = React.lazy(() => import("./components/ProductDetail/ProductDetail"));

// Contexto de login
export const AuthContext = React.createContext({ user: null });

function App() {
  // Estado del login
  const [authInfo, setAuthInfo] = React.useState({ user: null });
  
  const changeProduct = (idProduct) => {
    console.log("el producto es: " + idProduct)
  }

  return (
    <AuthContext.Provider value={authInfo}>

      <div className="app">
        <BrowserRouter>

          <Header></Header> 

          <Routes>
            {/* Rutas cargadas normal (no lazy) */}
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/my-account' element={<MyAccount></MyAccount>}></Route>
            <Route path='/login' element={<Login login={setAuthInfo}></Login>}></Route>
            

            {/* Rutas cargadas de forma lazy */}
            <Route path='/Products' element={<React.Suspense fallback={<p>Cargando...</p>}> <ProductsList changeProduct={changeProduct}></ProductsList></React.Suspense>}></Route>
            <Route path='/ProductDetail/:id' element={<React.Suspense fallback={<p>Cargando...</p>}> <ProductDetail></ProductDetail> </React.Suspense>}></Route>

            {/* Paginas no encontradas */}
            <Route path="*" element={<React.Suspense fallback={<p>Cargando...</p>}> <NotFound></NotFound> </React.Suspense>}></Route>
          </Routes>

        </BrowserRouter>

      </div>

    </AuthContext.Provider>

  );
}

export default App;
