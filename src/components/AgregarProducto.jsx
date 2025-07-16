function AgregarProducto({ mensaje }) {
  return (
    <div className="card-header">
      <h2>Agregar Producto</h2>
      {mensaje.texto && (
        <div id="mensaje" className={`mensaje ${mensaje.tipo} fade-in`}>
          {mensaje.texto}
        </div>
      )}
    </div>
  );
}

export default AgregarProducto;
