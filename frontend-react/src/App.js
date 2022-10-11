import { BrowserRouter, Route, Routes } from "react-router-dom"
import Beranda from "./components/Beranda"
import ManajemenBuku from "./components/ManajemenBuku"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Beranda />} />
          <Route path="/manajemen-buku" exact element={<ManajemenBuku />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
