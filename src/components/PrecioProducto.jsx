function PrecioProducto(){
  return <div class="form-group">
            <label for="precio">Precio</label>
            <input type="number" id="precio" name="precio" placeholder="000" />
            <span class="error-message" id="error-precio"></span>
          </div>
}

export default PrecioProducto;
