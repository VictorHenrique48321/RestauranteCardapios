import Itens from "pages/itens"
import { useState } from "react"
import Buscador from "./buscador"
import stylesTema from "styles/Tema.module.scss"
import styles from "./Cardapio.module.scss"
import Filtros from "./filtros"
import Ordenador from "./ordernador"


function Cardapio() {

  const [buscar, setBuscar] = useState("")
  const [filtro, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState("")

  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>Cardapio</h3>
      <Buscador buscar={buscar} setBuscar={setBuscar}/>
      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro}/>
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
      </div>
      <Itens buscar={buscar} filtro={filtro} ordenador={ordenador}/>
    </section>
  )
}

export default Cardapio