import styles from "./Cardapio.module.scss"
import {ReactComponent as Logo } from "assets/img/logo.svg"

function Cardapio() {
  return (
    <main>
      <nav className={styles.menu}>Aluroni</nav>
      <Logo/>
    </main>
  )
}

export default Cardapio