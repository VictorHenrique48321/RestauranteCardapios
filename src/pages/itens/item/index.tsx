import styles from "./Item.module.scss"
import { Prato } from "types/pratos"
import TagsPrato from "components/tagsPrato"
import { useNavigate } from "react-router-dom"

type Props = Prato

function Item(props: Props) {
  const {id, title, description, photo} = props
  const navegarPara = useNavigate()

  return (
    <div className={styles.item} onClick={() => navegarPara(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <TagsPrato {...props}/>
    </div>
  )
}

export default Item