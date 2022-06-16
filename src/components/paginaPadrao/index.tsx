import { Outlet } from "react-router-dom"
import styles from "./PaginaPadrao.module.scss"
import stylesTema from "styles/Tema.module.scss"

function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__texto}>
          A casa do codigo e da massa
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet/>
      </div>
    </>
  )
}

export default PaginaPadrao