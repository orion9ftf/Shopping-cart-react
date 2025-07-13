function ProductosRegistrados() {
  return <section class="card">
      <div class="card-header">
        <h2>Productos Registrados</h2>
      </div>
      <div class="card-content">
        <div id="lista-productos" class="productos-lista">
          <div class="productos-vacio">
            <p>No hay productos registrados. Agrega uno usando el formulario.</p>
          </div>
        </div>
      </div>
    </section>
}

export default ProductosRegistrados;
