import React, { useEffect, useState } from "react"
import Item from "./item"
import cardapio from "data/cardapio.json"
import styles from "./Itens.module.scss"
import { Cardapio } from "types/pratos"

interface Props {
  buscar: string
  filtro: number | null
  ordenador: string
}

function Itens(props: Props) {

  const [lista, setLista] = useState(cardapio)

  const {buscar, filtro, ordenador} = props

  function testeBuscar (title: string) {
    const regex = RegExp(buscar, "i")
    return regex.test(title)
  }

  function testeFiltro (id: number) {
    if(filtro !== null) return filtro === id
    return true
  }

  function ordenar (novaLista: Cardapio) {
    switch(ordenador) {
    case "porcao": 
      return novaLista.sort((a, b) => a.size > b.size ? 1 : - 1)
    case "qtd_pessoas": 
      return novaLista.sort((a, b) => a.serving > b.serving ? 1 : - 1)
    case "preco":
      return novaLista.sort((a, b) => a.price > b.price ? 1 : - 1)
    default: 
      return novaLista
    }
  }

  useEffect(() => {

    const novaLista = cardapio.filter(item => 
      testeBuscar(item.title) && testeFiltro(item.category.id)
    )

    setLista(ordenar(novaLista))

  }, [filtro, buscar, ordenador])

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item}/>
      ))}
    </div>
  )
}

export default Itens