import { useState } from 'react';
import AgregarProducto from './AgregarProducto';
import ButtonSubmit from './ButtonSubmit';
import CategoriaProductos from './CategoriaProductos';
import PrecioProducto from './PrecioProducto';

function RegistroProductos({ onAgregarProducto, contadorId, mostrarMensaje, mensaje }) {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    categoria: ''
  });
  const [errors, setErrors] = useState({
    nombre: '',
    precio: '',
    categoria: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Limpiar error cuando el usuario escribe
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validarCampo = (nombreCampo, valor) => {
    if (valor.trim() === "") {
      return `El campo ${nombreCampo} es obligatorio`;
    }
    if (nombreCampo === "precio" && isNaN(valor)) {
      return "El precio debe ser un número válido";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = { ...errors };

    // Validar campos
    Object.keys(formData).forEach(key => {
      const error = validarCampo(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        formIsValid = false;
      }
    });

    setErrors(newErrors);

    if (formIsValid) {
      const nuevoProducto = {
        id: contadorId,
        nombre: formData.nombre.trim(),
        precio: parseFloat(formData.precio),
        categoria: formData.categoria.trim(),
        fechaCreacion: new Date().toISOString()
      };

      onAgregarProducto(nuevoProducto);
      mostrarMensaje("Producto agregado correctamente", "success");
      setFormData({
        nombre: '',
        precio: '',
        categoria: ''
      });
    } else {
      mostrarMensaje("Por favor corrige los errores en el formulario", "error");
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Registro de Productos</h1>
      </header>

      <section className="card">
        <AgregarProducto mensaje={mensaje} />
        <div className="card-content">
          <form id="formulario-producto" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="nombre">Nombre del Producto</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej: Laptop Dell"
              />
              {errors.nombre && <span className="error-message">{errors.nombre}</span>}
            </div>
            <PrecioProducto 
              value={formData.precio}
              onChange={handleChange}
              error={errors.precio}
            />
            <CategoriaProductos
              value={formData.categoria}
              onChange={handleChange}
              error={errors.categoria}
            />
            <ButtonSubmit />
          </form>
        </div>
      </section>
    </div>
  );
}

export default RegistroProductos;
