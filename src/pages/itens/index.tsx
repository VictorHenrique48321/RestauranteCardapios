import React from 'react'
import Item from './item'
import cardapio from "./itens.json"
import styles from "./Itens.module.scss"

function Itens() {
  return (
    <div className={styles.itens}>
      {cardapio.map((item) => (
        <Item key={item.id} {...item}/>
      ))}
    </div>
  )
}

export default Itens