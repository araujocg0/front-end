import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/homes/Home"
import Students from "./pages/students/Students"
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App