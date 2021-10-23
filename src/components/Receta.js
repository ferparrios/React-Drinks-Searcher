import React,  { useContext, useState } from 'react'
import { ModalContext } from '../context/ModalContext'

import Modal from '@mui/material/Modal';

const MODAL_STYLES = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  backgroundColor: "white",
  padding: 10
}

const Receta = ({ receta }) => {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // extraer los valores del context
  const { informacion, setIdReceta, setReceta } = useContext(ModalContext)

  // Muestra y formatea los ingredientes
  const mostrarIngredientes = informacion => {
    let ingredientes = []
    for(let i = 1; i < 16; i++){
      if(informacion[`strIngredient${i}`]) {
        ingredientes.push(
          <li>{informacion[`strIngredient${i}`] } - {informacion[`strMeasure${i}`]} </li>
        )
      }
    }
    return ingredientes
  }

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>

        <img src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} className="card-img-top" />

        <div className="card-body">
          <button
            className="btn btn-block btn-primary"
            type="button"
            onClick={() => {
              setIdReceta(receta.idDrink)
              handleOpen()
            }}
          >
            Ver Receta
          </button>

          <Modal 
            open={open} 
            onClose={
              () => {
                setIdReceta(null)
                setReceta({})
                handleClose()
              }}
            >
            <div style={MODAL_STYLES} >
              <h2>{informacion.strDrink}</h2>
              <h3 className="mt-4">Instrucciones</h3>
              <p>
                {informacion.strInstructions}
              </p>
              <img src={informacion.strDrinkThumb} alt="" className="img-fluid my-4" />
              <h3>Ingredientes y cantidades</h3>
              <ul>
                {mostrarIngredientes(informacion)}
              </ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Receta
