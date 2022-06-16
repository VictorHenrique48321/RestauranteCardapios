import styles from "./Pratos.module.scss"
import cardapio from "data/cardapio.json"
import { useParams } from "react-router-dom"
import TagsPrato from "components/tagsPrato"
import NotFound from "pages/notFound"
import PaginaPadrao from "components/paginaPadrao"

function Pratos() {
  const { id } = useParams()

  const prato = cardapio.find((item) => item.id === Number(id))

  if(!prato) {
    return <NotFound/>
  }

  return (
    <PaginaPadrao>
      <button className={styles.voltar}>
        {"< Voltar"}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}> {prato.title} </h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {prato.description}
          </p>
          <TagsPrato {...prato}/>
        </div>
      </section>
    </PaginaPadrao>
  )
}

export default Pratos