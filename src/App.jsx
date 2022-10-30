import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Mainpage from "./pages/Mainpage"
import Mainpagenologin from "./pages/Mainpagenologin"
import {AuthContext} from "./context/AuthContext";
import {useContext}from "react"
import Footer from "./components/Footer"
import Ideas from "./pages/Ideas"
import Header from "./components/Header"
function App() {
 // const { state } = useContext(AuthContext);
 const state=useContext(AuthContext)
 console.log(state)
  return (
    <div className="app">
       <BrowserRouter>
      
         <Routes>
      
         <Route path='/login' element={<Login/>}/>
           <Route path='/' element={<Mainpagenologin/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/mainpage'element = {<Mainpage/>}/>
          <Route path='/ideas'element = {<Ideas/>}/>
         </Routes>
         <Footer/>
       </BrowserRouter>
    </div>
  )
}

export default App
