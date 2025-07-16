function PrecioProducto({ value, onChange, error }) {
  return (
    <div className="form-group">
      <label htmlFor="precio">Precio</label>
      <input
        type="number"
        id="precio"
        name="precio"
        value={value}
        onChange={onChange}
        placeholder="000"
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default PrecioProducto;

