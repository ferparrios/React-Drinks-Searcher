import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {

  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: ''
  })

  const{ categorias } = useContext(CategoriasContext)
  const { setBusquedaRecetas, setConsultar } = useContext(RecetasContext)

  // funcion para leer los contenidos
  const obtenerDatosReceta = e => {
    setBusqueda({
      ...busqueda,
    [e.target.name]: e.target.value
    })
  }

  return (
    <form action="" className="col-12" onSubmit={e => {
      e.preventDefault()
      setBusquedaRecetas(busqueda)
      setConsultar(true)
    }}>
      <fieldset className="text-center">
        <legend>Bebidas por categoía o ingrediente</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name=""
            id=""
            className="form-control"
            placeholder="Buscar por Ingrediente"
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className="col-md-4">
          <select name="categoria" id="" className="form-control" onChange={obtenerDatosReceta}>
            <option value="">-- Seleccionar Categoría --</option>
            {
              categorias.map(categoria => (
                <option value={categoria.strCategory} 
                key={categoria.strCategory}>
                  {categoria.strCategory}
                </option>
              ))
            }
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            name=""
            id=""
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
