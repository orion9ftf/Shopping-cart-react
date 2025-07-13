import AgregarProducto from "./AgregarProducto";
import ButtonSubmit from "./ButtonSubmit";
import CategoriaProductos from "./CategoriaProductos";
import PrecioProducto from "./PrecioProducto";

function RegistroProductos() {
  return <div class="container">
    <header class="header">
      <h1>Registro de Productos</h1>
    </header>

    <section class="card">
      <AgregarProducto />
      <div class="card-content">
        <form id="formulario-producto" novalidate>
          <div class="form-group">
            <label for="nombre">Nombre del Producto</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ej: Laptop Dell" />
            <span class="error-message" id="error-nombre"></span>
          </div>
          <PrecioProducto />
          <CategoriaProductos/>
          <ButtonSubmit />
        </form>
      </div>
    </section>
  </div>

}
export default RegistroProductos;
