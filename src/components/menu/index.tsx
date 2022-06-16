import {ReactComponent as Logo } from "assets/img/logo.svg"
import { Link } from "react-router-dom"
import styles from "./Menu.module.scss"

function Menu() {

  const rotas = [{
    label: "Inicio",
    to: "/",
  }, {
    label: "Cardapio",
    to: "/cardapio",
  }, {
    label: "Sobre",
    to: "/sobre"
  }]

  return (
    <nav className={styles.menu}>
      <Logo/>
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li className={styles.menu__link} key={index}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu