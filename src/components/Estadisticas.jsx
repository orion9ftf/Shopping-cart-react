function Estadisticas({ totalProductos, precioPromedio, categoriasUnicas }) {
  return (
    <section className="card">
      <div className="card-header">
        <h2>Estadísticas</h2>
      </div>
      <div className="card-content">
        <div className="estadisticas">
          <div className="stat-item stat-blue">
            <span className="stat-label">Total de productos:</span>
            <span className="stat-value">{totalProductos}</span>
          </div>
          <div className="stat-item stat-green">
            <span className="stat-label">Precio promedio:</span>
            <span className="stat-value">${precioPromedio.toFixed(2)}</span>
          </div>
          <div className="stat-item stat-purple">
            <span className="stat-label">Categorías únicas:</span>
            <span className="stat-value">{categoriasUnicas}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Estadisticas;
