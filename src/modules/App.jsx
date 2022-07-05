import React from "react";
import Home from './index';
import About from './about';
import {BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
        <header className="row">
            <nav className="navbar col-12 col-sm-12 col-lg-12 col-xl-12 navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/"><img src="/img/nezzed.png" alt="Nezzed" className="brand"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/store">Tienda</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder='Buscar' aria-label="Search"/>
                    <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </Router>
  );
}

export default App;