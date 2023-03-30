import './App.css';
import logo from './img/logo.png';
import { Link } from "react-router-dom";

function App() {
  
  return (
    <div className="App">       
       <div className="container_full">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form">
              <h2 className="title">LOGIN</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input className="user_text" type="text" name="usuario" autocomplete="username" placeholder="Usuario" required="yes" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input className="password_text" type="password" name="contraseña" autocomplete="current-password" placeholder="Contraseña" id="id_password" required="yes" />
              </div>
              <Link to="/main"><input type="submit" value="Ingresar" className="btn solid" /></Link>             
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
            <img src={logo} className="image" alt="Grupo Yum" />
              <h3>CE MANAGEMENT SYSTEM</h3>
            </div>
          </div>
        </div>
      </div>
     </div>
      
  );
}
export default App;