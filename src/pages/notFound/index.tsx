import styles from "./NotFound.module.scss"
import stylesTema from "styles/Tema.module.scss"
import classNames from "classnames"
import {ReactComponent as NotFoundImage} from "assets/img/not_found.svg"
import {useNavigate} from "react-router-dom"

function NotFound() {

  const navegarPara = useNavigate()

  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTema.container]: true
    })}>
      <div className={styles.voltar}>
        <button onClick={(() => navegarPara(-1))}>
          {"< Voltar"}
        </button>
      </div>
      <NotFoundImage/>
    </div>
  )
}

export default NotFound