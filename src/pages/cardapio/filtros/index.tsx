import React from "react"
import classNames from "classnames"

import filtros from "./filtros.json"
import styles from "./Filtros.module.scss"

type IOpcao = typeof filtros[0]

interface Props {
  filtro: number | null
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

function Filtros({filtro, setFiltro}: Props) {

  function selecionarFiltros(opcao: IOpcao) {
    return setFiltro(opcao.id)
  }

  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button
          className={classNames({
            [styles.filtros__filtro]: true,
            [styles["filtros__filtro--ativo"]]: filtro === opcao.id
          })}
          key={opcao.id} 
          onClick={() => selecionarFiltros(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  )
}

export default Filtros