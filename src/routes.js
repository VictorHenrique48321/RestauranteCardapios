import Cardapio from "pages/cardapio"
import Inicio from "pages/inicio"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/cardapio" element={<Cardapio/>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter