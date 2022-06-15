
import './App.css';
import {useState, useEffect} from "react";
import Axios from "axios";
import { Select, MenuItem } from "@mui/material"

function App() {
  


  return (
    <div className="App">       

       <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form">
              <h2 className="title">LOGIN</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" name="usuario" autocomplete="username" placeholder="Usuario" required="yes" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" name="contraseña" autocomplete="current-password" placeholder="Contraseña" id="id_password" required="yes" />
                <i className="far fa-eye" id="togglePassword" style="cursor: pointer;"></i>
              </div>
            
              {/* <a className="pass" href="#">Olvido su contraseña</a> */}
              <input type="submit" value="Sign in" className="btn solid" />
             
            </form>
          
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
            <img src="img/logo.png" className="image" alt="Comidas Especializadas" />
              <h3>CE MANAGEMENT SYSTEM</h3>
              
            </div>
          </div>

        </div>
      </div>



     </div>
      
  );
}


export default App;