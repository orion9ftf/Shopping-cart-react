function Estadicticas() {
  return <section class="card">
      <div class="card-header">
        <h2>Estadísticas</h2>
      </div>
      <div class="card-content">
        <div class="estadisticas">
          <div class="stat-item stat-blue">
            <span class="stat-label">Total de productos:</span>
            <span class="stat-value" id="total-productos">0</span>
          </div>
          <div class="stat-item stat-green">
            <span class="stat-label">Precio promedio:</span>
            <span class="stat-value" id="precio-promedio">$ 0</span>
          </div>
          <div class="stat-item stat-purple">
            <span class="stat-label">Categorías únicas:</span>
            <span class="stat-value" id="categorias-unicas">0</span>
          </div>
        </div>
      </div>
    </section>
}

export default Estadicticas;
