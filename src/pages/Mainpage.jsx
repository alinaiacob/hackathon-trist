import React from 'react'
import NavbarComp from '../components/NavbarComp'
import { useNavigate } from "react-router-dom";
import FormSuggestion from '../components/FormSuggestion';



const Mainpage = () => {
  const navigate=useNavigate();
  const logout=()=>{
   console.log('Logout')
  }
  return <div>

    <div>
    
     <nav>
      <NavbarComp>
       <h1>Mainpage</h1>
       <FormSuggestion/>
      </NavbarComp>
        </nav> 
</div>
 
    <h2>Welcome,user</h2>
    <button onClick={logout}>Logout</button>
  </div>
}

export default Mainpage
