
import './App.css';
import {useState, useEffect} from "react";
import Axios from "axios";
import { Select, MenuItem, Button } from "@mui/material"

function App() {
  
  const restaurantes_array = [
    { value: "PH1", label: "PH1" },
    { value: "PH2", label: "PH2" },
    { value: "PH3", label: "PH3" },
    { value: "PH4", label: "PH4" },
    { value: "PH5", label: "PH5" },
    { value: "PH6", label: "PH6" },
    { value: "PH7", label: "PH7" },
    { value: "PH8", label: "PH8" },
    { value: "PH9", label: "PH9" },
    { value: "PH10", label: "PH10" }
  ];

  const [getVocs, setListVocs] = useState([]);

  const [restau, setRestaurant] = useState("PH1");

  const handleChangeRest = (event) => {
    setRestaurant(event.target.value);
  };


  // useEffect(()=>{
  //   Axios.get("http://localhost:3001/getVocs").then((response)=> {
  //     setListVocs(response.data) 
  //   })
  // }, []);


  const filterRest = () =>{
    Axios.get("http://localhost:3001/getVocs").then((response)=> {
      setListVocs(response.data)
    },[])
  };

  return (
    <div className="App">
       <h1>VOC 2022</h1>
       <form action="">
          <label>SELECCIONAR RESTAURANTE: </label>
          <Select value={restau} onChange={handleChangeRest}>
            {restaurantes_array.map((restaurantes_array) => (
              <MenuItem key={restaurantes_array.value} value={restaurantes_array.value}>
                {restaurantes_array.label}
              </MenuItem>
            ))}
          </Select>
        </form>
        <br/>
      <div className="voc-view">
      <table>
            <tr>
              <th>Fecha</th>
              <th> Restaurante</th>
              <th> miGGR1</th>
            </tr>
          </table>
            {getVocs.filter(ress => ress.restaurante===restau).map((ress)=>{
            return(
              <table>
                <tr>
                    <td>{ress.fecha}</td>
                    <td>{ress.restaurante}</td>
                    <td>{ress.miGGR1}</td>
                </tr>
              </table>
              
            )
          })}
      </div>
    </div>
  );
}


export default App;