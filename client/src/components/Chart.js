import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



function Chart(props) {
    const options = {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'REPORTE VOC ',
          },
        },
      };
      
      const labels = ['Mi GGR me trata como si yo tuviera el potencial de hacer una diferencia', 
                        'Mi GGR forma un equipo diverso', 
                        'Confio en mi GGR', 
                        'El uniforme que recibo es de mi talla e incluye un gafete con mi nombre', 
                        'Tengo un ambiente seguro de trabajo', 
                        'Nuestro horario es colocado en el restaurante al menos con una semana de anticipación', 
                        'Mi GGR asigna turnos de manera justa y de acuerdo a nuestra disponibilidad acordada',
                        'Mi equipo se apasiona siempre por ser clientemaniacos',
                        'Mi GGR da el ejemplo de Clientemania y nos pide que nos aseguremos de que los clientes sean nuestra prioridad',
                        'He sido capacitado completamente sobre como ser un clientemaniaco',
                        'Nuestro restaurante siempre esta organizado y listo para los clientes, incluso cuando esta lleno',
                        'Si les preguntaran a nuestros clientes, ellos dirian que proveemos un gran servicio',
                        'Los miembros de equipo de mi restaurante siempre llegan puntualmente al trabajo',
                        'Mi GGR nos ha comunicado la meta extraordinario del restaurante a mi equipo y a mi',
                        'Mi GGR me alienta siempre a tratar y lograr resultados extraordinarios y me muestra como hacerlo',
                        'Recomendaria a mi restauranre como un gran lugar para trabajar',
                        'Recibo toda la capacitacion que necesito para poder alcanzar resultados extraordinarios',
                        'Me dan coaching y retroalimentacion con regularidad sobre como hacer aun mejor mi trabajo',
                        'Siento que tengo oportunidades para crecer profesionalmente dentro de la compañía',
                        'Mis compañeros y yo siempre desmostramos un gran trabajo en equipo',
                        'La gente de nuestro equipo ayuda aun cuando no es su trabajo',
                        'Mis colegas y yo nos alentamos mutuamente a alcanzar resultados extraordinarios',
                        'Mi GGR crea una gran cultura de reconocimiento en mi restaurante',
                        'Puedo dar reconocimiento a cualquiera en mi equipo cada vez que quiero hacerlo',
                        'Todos se enteran cuando alguien recibe reconocimiento en mi restaurante',            
                
                    ];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Year 2022',
            data: props.data1,
            borderColor: 'rgb(0, 179, 0)',
            backgroundColor: 'rgb(0, 179, 0)',
          },
        ],
      };
  return (
    <>
        <div>
             <Bar options={options} data={data} />
        </div>
    </>
  )
  
}

export default Chart;
