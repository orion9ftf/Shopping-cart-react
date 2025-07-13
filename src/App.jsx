import './App.css';
import SectionNavbar from './components/SectionNavbar';
import RegistroProductos from './components/RegistroProductos';
import ProductosRegistrados from './components/ProductosRegistrados';
import Estadicticas from './components/Estadisticas';
import FooterCart from './components/FooterCart';

function App() {
  return (
    <div className="App">
        <SectionNavbar />
        <RegistroProductos />
        <ProductosRegistrados />
        <Estadicticas />
        <FooterCart />
    </div>
  );
}

export default App;
