function ProductosRegistrados({ productos, onEliminarProducto }) {
  if (productos.length === 0) {
    return (
      <section className="card">
        <div className="card-header">
          <h2>Productos Registrados</h2>
        </div>
        <div className="card-content">
          <div className="productos-lista">
            <div className="productos-vacio">
              <p>No hay productos registrados. Agrega uno usando el formulario.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="card">
      <div className="card-header">
        <h2>Productos Registrados</h2>
      </div>
      <div className="card-content">
        <div className="productos-lista">
          {productos.map((p) => (
            <div key={p.id} className="producto-item">
              <div className="producto-info">
                <h3>{p.nombre}</h3>
                <p>Categoría: {p.categoria} | Precio: ${p.precio.toFixed(2)}</p>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => onEliminarProducto(p.id)}
                title="Eliminar producto"
              >
                <p>Eliminar</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductosRegistrados;
