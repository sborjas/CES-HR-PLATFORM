import '../styles/Main.css';
import logo from '../img/logo.png';
import vozCamp from '../img/voz-campeones.jpg';
import empty from '../img/empty.jpg';
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className='Main'>
      <div class="usuario">Usuario: Samuel Borjas <div class="image-usuario"></div></div>
        <label>
            <input type="checkbox" />
            <span class="menu"> <span class="hamburger"></span> </span>
            <ul className='menu-option'>
              <Link to="/main"> <a>Pagina de Inicio</a></Link>
              <Link to="/reporteVoc">  <a>Voz de Campeones</a></Link>
              <Link to="#">  <a>TMRI</a></Link>
              <Link to="#">  <a>Un gran Vendedor</a></Link>
            </ul>
        </label>

            <div>
              <img class="img-logo" src={logo} alt="A dinosaur wearing an aluminium jacket"/> 
            </div>

            <div class="center-info">
              <div class="card-block cards">
                <article class="card">
                    <a href="#">
                        <picture class="thumbnail">
                            <img class="img-title" src={vozCamp} alt="A banana that looks like a bird" />
                        </picture>
                        <div class="">
                          <span class="line">
                            <h2><span>Voz de Campeones</span></h2>
                            
                            <Link to="/reporteVoc"><p class="iniciar">Ver reportes</p></Link>
                        </span>
                        </div>
                    </a>
                </article>

                <article class="card">
                    <a href="#">
                        <picture class="thumbnail">
                            <img class="img-title" src={empty} alt="Norwegian boller" />
                        </picture>
                        <div class="">
                          <span class="line">
                            <h2><span>TMRI</span></h2>
                            <p class="proximamente" onClick={window['alertHello']}>Ver reportes</p>
                        </span>   
                        </div>
                    </a>
                </article>

                <article class="card">
                    <a href="#">
                        <picture class="thumbnail">
                            <img class="img-title" src={empty} alt="A dinosaur wearing an aluminium jacket" />
                        </picture>
                        <div class="">
                          <span class="line">
                            <h2><span>Un Gran Vendedor</span></h2>
                            <p class="proximamente">Ver reportes</p>
                        </span>  
                        </div>
                    </a>
                </article>

            </div>
      </div>

      <div class="footer">
        <p>Grupo COMIDAS - 2022</p>
      </div>
    </div>
    
  );  
  }
  
  
  export default Main;