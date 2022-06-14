import React from 'react'
import { CgSearch } from "react-icons/cg"

import styles from "./Buscador.module.scss"

interface Props {
  buscar: string,
  setBuscar: React.Dispatch<React.SetStateAction<string>>
}

function Buscador({buscar, setBuscar}: Props) {
  return (
    <div className={styles.buscador}>
      <input
        value={buscar}
        onChange={evento => setBuscar(evento.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4C4D5E"/>
    </div>
  )
}

export default Buscador