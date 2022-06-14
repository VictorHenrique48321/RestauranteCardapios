import {ReactComponent as Logo } from "assets/img/logo.svg"
import Itens from "pages/itens"
import { useState } from "react"
import Buscador from "./buscador"

import styles from "./Cardapio.module.scss"
import Filtros from "./filtros"
import Ordenador from "./ordernador"


function Cardapio() {

  const [buscar, setBuscar] = useState("")
  const [filtro, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState("")

  return (
    <main>
      <nav className={styles.menu}>
        <Logo/>
      </nav>
      <header className={styles.header}>
        <div className={styles.header__texto}>
          A casa do codigo e da massa
        </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardapio</h3>
        <Buscador buscar={buscar} setBuscar={setBuscar}/>
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro}/>
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
        </div>
        <Itens buscar={buscar} filtro={filtro} ordenador={ordenador}/>
      </section>
    </main>
  )
}

export default Cardapio