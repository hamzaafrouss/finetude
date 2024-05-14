import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Componentes/About/About';
import Contact from './Componentes/Contact/Contact';
import Header from './Componentes/Header/Header';
import Home from './Componentes/Home/Home';
import Footer from './Componentes/Footer/Footer';
import Resiv from './Componentes/Risev/Resiv';
import Center from './Componentes/Center/Center';
import Formation from './Componentes/Formation/Formation'
import { Provider } from 'react-redux';
import store from './Store/store';
import Archive from './Componentes/Archive/Archive';

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resiv" element={<Resiv />} />
            <Route path='/center' element={<Center />} />
            <Route path='/formation' element={<Formation />} />
            <Route path='/archive' element={<Archive/>} />
          </Routes>
        </Provider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
