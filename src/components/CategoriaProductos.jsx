function CategoriaProductos(){
  return <div class="form-group">
            <label for="categoria">Categoría</label>
            <input type="text" id="categoria" name="categoria" placeholder="Ej: Electrónicos" />
            <span class="error-message" id="error-categoria"></span>
          </div>
}

export default CategoriaProductos;
