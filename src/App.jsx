import Header from "./components/Header"
import Footer from "./components/Footer"
import Products from "./pages/Products"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Homepage from "./pages/Homepage"
import {BrowserRouter, Routes, Route } from "react-router-dom"

function App(){
  return(
    <BrowserRouter>
    <div className="app">
      <Header/>

      <main>
      <Routes>
        <Route path ="/" element={<Homepage/>}></Route>
        <Route path ="/login" element ={<Login/>}></Route>
        <Route path ="/signup" element={<Signup/>}></Route>
        <Route path ="/products" element={<Products/>}></Route>
      </Routes>
      </main>
      
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
