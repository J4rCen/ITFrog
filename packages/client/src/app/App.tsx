import { HashRouter } from "react-router-dom"
import AppRoutes from "../pages"
import "./App.scss"



function App() {

  return (
    <HashRouter>
      <AppRoutes/>
    </HashRouter>
  )
}

export default App
