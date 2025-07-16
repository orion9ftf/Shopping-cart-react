function CategoriaProductos({ value, onChange, error }) {
  return (
    <div className="form-group">
      <label htmlFor="categoria">Categoría</label>
      <input
        type="text"
        id="categoria"
        name="categoria"
        value={value}
        onChange={onChange}
        placeholder="Ej: Electrónicos"
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default CategoriaProductos;

