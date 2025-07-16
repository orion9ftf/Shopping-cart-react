import { useState, useEffect } from 'react';
import './assets/css/App.css';
import SectionNavbar from './components/SectionNavbar';
import RegistroProductos from './components/RegistroProductos';
import ProductosRegistrados from './components/ProductosRegistrados';
import Estadisticas from './components/Estadisticas';
import FooterCart from './components/FooterCart';

function App() {
  const [productos, setProductos] = useState([]);
  const [contadorId, setContadorId] = useState(1);
  const [estadisticas, setEstadisticas] = useState({
    total: 0,
    promedio: 0,
    categorias: 0
  });
  const [mensaje, setMensaje] = useState({ texto: '', tipo: '' });

  // para probar useEffect en la consola
  useEffect(() => {
    console.log("Etapa 1 - Iniciando aplicación");
    actualizarEstadisticas();
  }, [productos]);

  const actualizarEstadisticas = () => {
    const total = productos.length;
    const sumaPrecios = productos.reduce((suma, p) => suma + p.precio, 0);
    const promedio = total === 0 ? 0 : sumaPrecios / total;
    const categorias = new Set(productos.map((p) => p.categoria.toLowerCase()));

    setEstadisticas({
      total,
      promedio,
      categorias: categorias.size
    });
  };

  const mostrarMensaje = (texto, tipo = "success") => {
    setMensaje({ texto, tipo });
    setTimeout(() => {
      setMensaje({ texto: '', tipo: '' });
    }, 4000);
  };

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
    setContadorId(contadorId + 1);
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter(producto => producto.id !== id));
  };

  return (
    <div className="App">
      <SectionNavbar />
      <RegistroProductos 
        onAgregarProducto={agregarProducto}
        contadorId={contadorId}
        mostrarMensaje={mostrarMensaje}
        mensaje={mensaje}
      />
      <ProductosRegistrados 
        productos={productos} 
        onEliminarProducto={eliminarProducto} 
      />
      <Estadisticas 
        totalProductos={estadisticas.total}
        precioPromedio={estadisticas.promedio}
        categoriasUnicas={estadisticas.categorias}
      />
      <FooterCart />
    </div>
  );
}

export default App;
