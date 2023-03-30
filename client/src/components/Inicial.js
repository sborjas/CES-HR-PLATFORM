import '../styles/Inicial.css';
import {useState, useEffect} from "react";
import Axios from "axios";
import { Select, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import Chart from './Chart';
import Widget from './Widget';

function Inicial() {
  
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


    //en estos arrays, voy a guardar las cantidades de 1s, 2s....para hacer paso 1 y 2 del algoritimo
    var respuestas1_array = [];
    var respuestas2_array = [];
    var respuestas3_array = [];
    var respuestas4_array = [];
    var respuestas5_array = [];
    var respuestas6_array = [];
    var respuestas7_array = [];
    var respuestas8_array = [];
    var respuestas9_array = [];
    var respuestas10_array = [];
    var respuestas11_array = [];
    var respuestas12_array = [];
    var respuestas13_array = [];
    var respuestas14_array = [];
    var respuestas15_array = [];
    var respuestas16_array = [];
    var respuestas17_array = [];
    var respuestas18_array = [];
    var respuestas19_array = [];
    var respuestas20_array = [];
    var respuestas21_array = [];
    var respuestas22_array = [];
    var respuestas23_array = [];
    var respuestas24_array = [];
    var respuestas25_array = [];

    var puntaje1, puntaje2, puntaje3, puntaje4, puntaje5, puntaje6, puntaje7, puntaje_final = 0

    var valores_grafico = [];

    var preg1_total_value,
    preg2_total_value,
    preg3_total_value,
    preg4_total_value,
    preg5_total_value,
    preg6_total_value,
    preg7_total_value,
    preg8_total_value,
    preg9_total_value,
    preg10_total_value,
    preg11_total_value,
    preg12_total_value,
    preg13_total_value,
    preg14_total_value,
    preg15_total_value,
    preg16_total_value,
    preg17_total_value,
    preg18_total_value,
    preg19_total_value,
    preg20_total_value,
    preg21_total_value,
    preg22_total_value,
    preg23_total_value,
    preg24_total_value,
    preg25_total_value = 0

    var cant1, cant2, cant3, cant4, cant5, cant_respuestas = 0
    var cant1_2, cant2_2, cant3_2, cant4_2, cant5_2 = 0
    var cant1_3, cant2_3, cant3_3, cant4_3, cant5_3 = 0
    var cant1_4, cant2_4, cant3_4, cant4_4, cant5_4 = 0
    var cant1_5, cant2_5, cant3_5, cant4_5, cant5_5 = 0

    var cant1_6, cant2_6, cant3_6, cant4_6, cant5_6 = 0
    var cant1_7, cant2_7, cant3_7, cant4_7, cant5_7 = 0
    var cant1_8, cant2_8, cant3_8, cant4_8, cant5_8 = 0
    var cant1_9, cant2_9, cant3_9, cant4_9, cant5_9 = 0

    var cant1_10, cant2_10, cant3_10, cant4_10, cant5_10 = 0
    var cant1_11, cant2_11, cant3_11, cant4_11, cant5_11 = 0
    var cant1_12, cant2_12, cant3_12, cant4_12, cant5_12 = 0
    var cant1_13, cant2_13, cant3_13, cant4_13, cant5_13 = 0

    var cant1_14, cant2_14, cant3_14, cant4_14, cant5_14 = 0
    var cant1_15, cant2_15, cant3_15, cant4_15, cant5_15 = 0
    var cant1_16, cant2_16, cant3_16, cant4_16, cant5_16 = 0
    var cant1_17, cant2_17, cant3_17, cant4_17, cant5_17 = 0

    var cant1_18, cant2_18, cant3_18, cant4_18, cant5_18 = 0
    var cant1_19, cant2_19, cant3_19, cant4_19, cant5_19 = 0
    var cant1_20, cant2_20, cant3_20, cant4_20, cant5_20 = 0
    var cant1_21, cant2_21, cant3_21, cant4_21, cant5_21 = 0

    var cant1_22, cant2_22, cant3_22, cant4_22, cant5_22 = 0
    var cant1_23, cant2_23, cant3_23, cant4_23, cant5_23 = 0
    var cant1_24, cant2_24, cant3_24, cant4_24, cant5_24 = 0
    var cant1_25, cant2_25, cant3_25, cant4_25, cant5_25 = 0

  
    const [getVocs, setListVocs] = useState([]);
  
    const [restau, setRestaurant] = useState("PH1");
  
    const handleChangeRest = (event) => {
      setRestaurant(event.target.value);
    };
  
  
    useEffect(()=>{
      Axios.get("http://localhost:3001/getVocs").then((response)=> {
        setListVocs(response.data) 
      })
    }, []);

    {getVocs.filter(ress => ress.restaurante===restau).map((ress)=>{
      return(
        

        respuestas1_array.push( ress.Mi_GGR_me_trata_como_si_yo_tuviera_el_potencial_de_hacer_una_diferencia),
        respuestas2_array.push( ress.Mi_GGR_forma_un_equipo_diverso),
        respuestas3_array.push( ress.Confio_en_mi_GGR),
        respuestas4_array.push( ress.El_uniforme_que_recibo_es_de_mi_talla_e_incluye_un_gafete_con_mi_nombre),
        respuestas5_array.push( ress.Tengo_un_ambiente_seguro_de_trabajo),
        respuestas6_array.push( ress.Nuestro_horario_es_colocado_en_el_restaurante_al_menos_con_una_semana_de_anticipacion),
        respuestas7_array.push( ress.Mi_GGR_asigna_turnos_de_manera_justa_y_de_acuerdo_a_nuestra_disponibilidad_acordada),
        respuestas8_array.push( ress.Mi_equipo_se_apasiona_siempre_por_ser_clientemaniacos),
        respuestas9_array.push( ress.Mi_GGR_da_el_ejemplo_de_Clientemania_y_nos_pide_que_nos_aseguremos_de_que_los_clientes_sean_nuestra_prioridad),
        respuestas10_array.push( ress.He_sido_capacitado_completamente_sobre_como_ser_un_clientemaniaco),
        respuestas11_array.push( ress.Nuestro_restaurante_siempre_esta_organizado_y_listo_para_los_clientes_incluso_cuando_esta_lleno),
        respuestas12_array.push( ress.Si_les_preguntaran_a_nuestros_clientes_ellos_dirian_que_proveemos_un_gran_servicio),
        respuestas13_array.push( ress.Los_miembros_de_equipo_de_mi_restaurante_siempre_llegan_puntualmente_al_trabajo),
        respuestas14_array.push( ress.Mi_GGR_nos_ha_comunicado_la_meta_extraordinario_del_restaurante_a_mi_equipo_y_a_mi),
        respuestas15_array.push( ress.Mi_GGR_me_alienta_siempre_a_tratar_y_lograr_resultados_extraordinarios_y_me_muestra_como_hacerlo),
        respuestas16_array.push( ress.Recomendaria_a_mi_restauranre_como_un_gran_lugar_para_trabajar),
        respuestas17_array.push( ress.Recibo_toda_la_capacitacion_que_necesito_para_poder_alcanzar_resultados_extraordinarios),
        respuestas18_array.push( ress.Me_dan_coaching_y_retroalimentacion_con_regularidad_sobre_como_hacer_aun_mejor_mi_trabajo),
        respuestas19_array.push( ress.Siento_que_tengo_oportunidades_para_crecer_profesionalmente_dentro_de_la_compañía),
        respuestas20_array.push( ress.Mis_compañeros_y_yo_siempre_desmostramos_un_gran_trabajo_en_equipo),
        respuestas21_array.push( ress.La_gente_de_nuestro_equipo_ayuda_aun_cuando_no_es_su_trabajo),
        respuestas22_array.push( ress.Mis_colegas_y_yo_nos_alentamos_mutuamente_a_alcanzar_resultados_extraordinarios),
        respuestas23_array.push( ress.Mi_GGR_crea_una_gran_cultura_de_reconocimiento_en_mi_restaurante),
        respuestas24_array.push( ress.Puedo_dar_reconocimiento_a_cualquiera_en_mi_equipo_cada_vez_que_quiero_hacerlo),
        respuestas25_array.push( ress.Todos_se_enteran_cuando_alguien_recibe_reconocimiento_en_mi_restaurante)

        
      )
    })}

    function getOccurrence(array, value) {
      var count = 0;
      array.forEach((v) => (v === value && count++));
      return count;
    }

    

    //cantidad de respuestas
    cant_respuestas = getVocs.filter(ress => ress.restaurante===restau).length

  console.log(cant_respuestas)

    cant1 = getOccurrence(respuestas1_array,1);
    cant2 = getOccurrence(respuestas1_array,2);
    cant3 = getOccurrence(respuestas1_array,3);
    cant4 = getOccurrence(respuestas1_array,4);
    cant5 = getOccurrence(respuestas1_array,5);

    cant1_2 = getOccurrence(respuestas2_array,1);
    cant2_2 = getOccurrence(respuestas2_array,2);
    cant3_2 = getOccurrence(respuestas2_array,3);
    cant4_2 = getOccurrence(respuestas2_array,4);
    cant5_2 = getOccurrence(respuestas2_array,5);

    cant1_3 = getOccurrence(respuestas3_array,1);
    cant2_3 = getOccurrence(respuestas3_array,2);
    cant3_3 = getOccurrence(respuestas3_array,3);
    cant4_3 = getOccurrence(respuestas3_array,4);
    cant5_3 = getOccurrence(respuestas3_array,5);

    cant1_4 = getOccurrence(respuestas4_array,1);
    cant2_4 = getOccurrence(respuestas4_array,2);
    cant3_4 = getOccurrence(respuestas4_array,3);
    cant4_4 = getOccurrence(respuestas4_array,4);
    cant5_4 = getOccurrence(respuestas4_array,5);

    cant1_5 = getOccurrence(respuestas5_array,1);
    cant2_5 = getOccurrence(respuestas5_array,2);
    cant3_5 = getOccurrence(respuestas5_array,3);
    cant4_5 = getOccurrence(respuestas5_array,4);
    cant5_5 = getOccurrence(respuestas5_array,5);

    cant1_6 = getOccurrence(respuestas6_array,1);
    cant2_6 = getOccurrence(respuestas6_array,2);
    cant3_6 = getOccurrence(respuestas6_array,3);
    cant4_6 = getOccurrence(respuestas6_array,4);
    cant5_6 = getOccurrence(respuestas6_array,5);

    cant1_7 = getOccurrence(respuestas7_array,1);
    cant2_7 = getOccurrence(respuestas7_array,2);
    cant3_7 = getOccurrence(respuestas7_array,3);
    cant4_7 = getOccurrence(respuestas7_array,4);
    cant5_7 = getOccurrence(respuestas7_array,5);

    cant1_8 = getOccurrence(respuestas8_array,1);
    cant2_8 = getOccurrence(respuestas8_array,2);
    cant3_8 = getOccurrence(respuestas8_array,3);
    cant4_8 = getOccurrence(respuestas8_array,4);
    cant5_8 = getOccurrence(respuestas8_array,5);

    cant1_9 = getOccurrence(respuestas9_array,1);
    cant2_9 = getOccurrence(respuestas9_array,2);
    cant3_9 = getOccurrence(respuestas9_array,3);
    cant4_9 = getOccurrence(respuestas9_array,4);
    cant5_9 = getOccurrence(respuestas9_array,5);

    cant1_10 = getOccurrence(respuestas10_array,1);
    cant2_10 = getOccurrence(respuestas10_array,2);
    cant3_10 = getOccurrence(respuestas10_array,3);
    cant4_10 = getOccurrence(respuestas10_array,4);
    cant5_10 = getOccurrence(respuestas10_array,5);

    cant1_11 = getOccurrence(respuestas11_array,1);
    cant2_11 = getOccurrence(respuestas11_array,2);
    cant3_11 = getOccurrence(respuestas11_array,3);
    cant4_11 = getOccurrence(respuestas11_array,4);
    cant5_11 = getOccurrence(respuestas11_array,5);

    cant1_12 = getOccurrence(respuestas12_array,1);
    cant2_12 = getOccurrence(respuestas12_array,2);
    cant3_12 = getOccurrence(respuestas12_array,3);
    cant4_12 = getOccurrence(respuestas12_array,4);
    cant5_12 = getOccurrence(respuestas12_array,5);

    cant1_13 = getOccurrence(respuestas13_array,1);
    cant2_13 = getOccurrence(respuestas13_array,2);
    cant3_13 = getOccurrence(respuestas13_array,3);
    cant4_13 = getOccurrence(respuestas13_array,4);
    cant5_13 = getOccurrence(respuestas13_array,5);

    cant1_14 = getOccurrence(respuestas14_array,1);
    cant2_14 = getOccurrence(respuestas14_array,2);
    cant3_14 = getOccurrence(respuestas14_array,3);
    cant4_14 = getOccurrence(respuestas14_array,4);
    cant5_14 = getOccurrence(respuestas14_array,5);

    cant1_15 = getOccurrence(respuestas15_array,1);
    cant2_15 = getOccurrence(respuestas15_array,2);
    cant3_15 = getOccurrence(respuestas15_array,3);
    cant4_15 = getOccurrence(respuestas15_array,4);
    cant5_15 = getOccurrence(respuestas15_array,5);

    cant1_16 = getOccurrence(respuestas16_array,1);
    cant2_16 = getOccurrence(respuestas16_array,2);
    cant3_16 = getOccurrence(respuestas16_array,3);
    cant4_16 = getOccurrence(respuestas16_array,4);
    cant5_16 = getOccurrence(respuestas16_array,5);

    cant1_17 = getOccurrence(respuestas17_array,1);
    cant2_17 = getOccurrence(respuestas17_array,2);
    cant3_17 = getOccurrence(respuestas17_array,3);
    cant4_17 = getOccurrence(respuestas17_array,4);
    cant5_17 = getOccurrence(respuestas17_array,5);

    cant1_18 = getOccurrence(respuestas18_array,1);
    cant2_18 = getOccurrence(respuestas18_array,2);
    cant3_18 = getOccurrence(respuestas18_array,3);
    cant4_18 = getOccurrence(respuestas18_array,4);
    cant5_18 = getOccurrence(respuestas18_array,5);

    cant1_19 = getOccurrence(respuestas19_array,1);
    cant2_19 = getOccurrence(respuestas19_array,2);
    cant3_19 = getOccurrence(respuestas19_array,3);
    cant4_19 = getOccurrence(respuestas19_array,4);
    cant5_19 = getOccurrence(respuestas19_array,5);

    cant1_20 = getOccurrence(respuestas20_array,1);
    cant2_20 = getOccurrence(respuestas20_array,2);
    cant3_20 = getOccurrence(respuestas20_array,3);
    cant4_20 = getOccurrence(respuestas20_array,4);
    cant5_20 = getOccurrence(respuestas20_array,5);

    cant1_21 = getOccurrence(respuestas21_array,1);
    cant2_21 = getOccurrence(respuestas21_array,2);
    cant3_21 = getOccurrence(respuestas21_array,3);
    cant4_21 = getOccurrence(respuestas21_array,4);
    cant5_21 = getOccurrence(respuestas21_array,5);

    cant1_22 = getOccurrence(respuestas22_array,1);
    cant2_22 = getOccurrence(respuestas22_array,2);
    cant3_22 = getOccurrence(respuestas22_array,3);
    cant4_22 = getOccurrence(respuestas22_array,4);
    cant5_22 = getOccurrence(respuestas22_array,5);

    cant1_23 = getOccurrence(respuestas23_array,1);
    cant2_23 = getOccurrence(respuestas23_array,2);
    cant3_23 = getOccurrence(respuestas23_array,3);
    cant4_23 = getOccurrence(respuestas23_array,4);
    cant5_23 = getOccurrence(respuestas23_array,5);

    cant1_24 = getOccurrence(respuestas24_array,1);
    cant2_24 = getOccurrence(respuestas24_array,2);
    cant3_24 = getOccurrence(respuestas24_array,3);
    cant4_24 = getOccurrence(respuestas24_array,4);
    cant5_24 = getOccurrence(respuestas24_array,5);

    cant1_25 = getOccurrence(respuestas25_array,1);
    cant2_25 = getOccurrence(respuestas25_array,2);
    cant3_25 = getOccurrence(respuestas25_array,3);
    cant4_25 = getOccurrence(respuestas25_array,4);
    cant5_25 = getOccurrence(respuestas25_array,5);


    preg1_total_value = (((cant5/cant_respuestas)*100) + ((cant4/cant_respuestas)*100) + ((cant3/cant_respuestas)*100)) - (((cant2/cant_respuestas)*100) + ((cant1/cant_respuestas)*100) )
    preg2_total_value = (((cant5_2/cant_respuestas)*100) + ((cant4_2/cant_respuestas)*100) + ((cant3_2/cant_respuestas)*100)) - (((cant2_2/cant_respuestas)*100) + ((cant1_2/cant_respuestas)*100) )
    preg3_total_value = (((cant5_3/cant_respuestas)*100) + ((cant4_3/cant_respuestas)*100) + ((cant3_3/cant_respuestas)*100)) - (((cant2_3/cant_respuestas)*100) + ((cant1_3/cant_respuestas)*100) )
    preg4_total_value = (((cant5_4/cant_respuestas)*100) + ((cant4_4/cant_respuestas)*100) + ((cant3_4/cant_respuestas)*100)) - (((cant2_4/cant_respuestas)*100) + ((cant1_4/cant_respuestas)*100) )
    preg5_total_value = (((cant5_5/cant_respuestas)*100) + ((cant4_5/cant_respuestas)*100) + ((cant3_5/cant_respuestas)*100)) - (((cant2_5/cant_respuestas)*100) + ((cant1_5/cant_respuestas)*100) )

    preg6_total_value = (((cant5_6/cant_respuestas)*100) + ((cant4_6/cant_respuestas)*100) + ((cant3_6/cant_respuestas)*100)) - (((cant2_6/cant_respuestas)*100) + ((cant1_6/cant_respuestas)*100) )
    preg7_total_value = (((cant5_7/cant_respuestas)*100) + ((cant4_7/cant_respuestas)*100) + ((cant3_7/cant_respuestas)*100)) - (((cant2_7/cant_respuestas)*100) + ((cant1_7/cant_respuestas)*100) )
    preg8_total_value = (((cant5_8/cant_respuestas)*100) + ((cant4_8/cant_respuestas)*100) + ((cant3_8/cant_respuestas)*100)) - (((cant2_8/cant_respuestas)*100) + ((cant1_8/cant_respuestas)*100) )
    preg9_total_value = (((cant5_9/cant_respuestas)*100) + ((cant4_9/cant_respuestas)*100) + ((cant3_9/cant_respuestas)*100)) - (((cant2_9/cant_respuestas)*100) + ((cant1_9/cant_respuestas)*100) )
    preg10_total_value = (((cant5_10/cant_respuestas)*100) + ((cant4_10/cant_respuestas)*100) + ((cant3_10/cant_respuestas)*100)) - (((cant2_10/cant_respuestas)*100) + ((cant1_10/cant_respuestas)*100) )

    preg11_total_value = (((cant5_11/cant_respuestas)*100) + ((cant4_11/cant_respuestas)*100) + ((cant3_11/cant_respuestas)*100)) - (((cant2_11/cant_respuestas)*100) + ((cant1_11/cant_respuestas)*100) )
    preg12_total_value = (((cant5_12/cant_respuestas)*100) + ((cant4_12/cant_respuestas)*100) + ((cant3_12/cant_respuestas)*100)) - (((cant2_12/cant_respuestas)*100) + ((cant1_12/cant_respuestas)*100) )
    preg13_total_value = (((cant5_13/cant_respuestas)*100) + ((cant4_13/cant_respuestas)*100) + ((cant3_13/cant_respuestas)*100)) - (((cant2_13/cant_respuestas)*100) + ((cant1_13/cant_respuestas)*100) )
    preg14_total_value = (((cant5_14/cant_respuestas)*100) + ((cant4_14/cant_respuestas)*100) + ((cant3_14/cant_respuestas)*100)) - (((cant2_14/cant_respuestas)*100) + ((cant1_14/cant_respuestas)*100) )
    preg15_total_value = (((cant5_15/cant_respuestas)*100) + ((cant4_15/cant_respuestas)*100) + ((cant3_15/cant_respuestas)*100)) - (((cant2_15/cant_respuestas)*100) + ((cant1_15/cant_respuestas)*100) )

    preg16_total_value = (((cant5_16/cant_respuestas)*100) + ((cant4_16/cant_respuestas)*100) + ((cant3_16/cant_respuestas)*100)) - (((cant2_16/cant_respuestas)*100) + ((cant1_16/cant_respuestas)*100) )
    preg17_total_value = (((cant5_17/cant_respuestas)*100) + ((cant4_17/cant_respuestas)*100) + ((cant3_17/cant_respuestas)*100)) - (((cant2_17/cant_respuestas)*100) + ((cant1_17/cant_respuestas)*100) )
    preg18_total_value = (((cant5_18/cant_respuestas)*100) + ((cant4_18/cant_respuestas)*100) + ((cant3_18/cant_respuestas)*100)) - (((cant2_18/cant_respuestas)*100) + ((cant1_18/cant_respuestas)*100) )
    preg19_total_value = (((cant5_19/cant_respuestas)*100) + ((cant4_19/cant_respuestas)*100) + ((cant3_19/cant_respuestas)*100)) - (((cant2_19/cant_respuestas)*100) + ((cant1_19/cant_respuestas)*100) )
    preg20_total_value = (((cant5_20/cant_respuestas)*100) + ((cant4_20/cant_respuestas)*100) + ((cant3_20/cant_respuestas)*100)) - (((cant2_20/cant_respuestas)*100) + ((cant1_20/cant_respuestas)*100) )

    preg21_total_value = (((cant5_21/cant_respuestas)*100) + ((cant4_21/cant_respuestas)*100) + ((cant3_21/cant_respuestas)*100)) - (((cant2_21/cant_respuestas)*100) + ((cant1_21/cant_respuestas)*100) )
    preg22_total_value = (((cant5_22/cant_respuestas)*100) + ((cant4_22/cant_respuestas)*100) + ((cant3_22/cant_respuestas)*100)) - (((cant2_22/cant_respuestas)*100) + ((cant1_22/cant_respuestas)*100) )
    preg23_total_value = (((cant5_23/cant_respuestas)*100) + ((cant4_23/cant_respuestas)*100) + ((cant3_23/cant_respuestas)*100)) - (((cant2_23/cant_respuestas)*100) + ((cant1_23/cant_respuestas)*100) )
    preg24_total_value = (((cant5_24/cant_respuestas)*100) + ((cant4_24/cant_respuestas)*100) + ((cant3_24/cant_respuestas)*100)) - (((cant2_24/cant_respuestas)*100) + ((cant1_24/cant_respuestas)*100) )
    preg25_total_value = (((cant5_25/cant_respuestas)*100) + ((cant4_25/cant_respuestas)*100) + ((cant3_25/cant_respuestas)*100)) - (((cant2_25/cant_respuestas)*100) + ((cant1_25/cant_respuestas)*100) )
    
    
    //Creemos en TODA la gente
    valores_grafico[0] = preg1_total_value
    valores_grafico[1] = preg2_total_value
    valores_grafico[2] = preg3_total_value

    puntaje1 = ((preg1_total_value + preg2_total_value + preg3_total_value)/3)/100*5

    //Somos clientemaniacos (Interno)
    valores_grafico[3] = preg4_total_value
    valores_grafico[4] = preg5_total_value
    valores_grafico[5] = preg6_total_value
    valores_grafico[6] = preg7_total_value

    puntaje2 = ((preg4_total_value + preg5_total_value + preg6_total_value + preg7_total_value)/4)/100*5

    //Somos clientemaniacos (Externo)
    valores_grafico[7] = preg8_total_value
    valores_grafico[8] = preg9_total_value
    valores_grafico[9] = preg10_total_value
    valores_grafico[10] = preg11_total_value
    valores_grafico[11] = preg12_total_value

    puntaje3 = ((preg8_total_value + preg9_total_value + preg10_total_value + preg11_total_value + preg12_total_value )/5)/100*5

    //Buscamos resultados extraordinarios
    valores_grafico[12] = preg13_total_value
    valores_grafico[13] = preg14_total_value
    valores_grafico[14] = preg15_total_value
    valores_grafico[15] = preg16_total_value

    puntaje4 = ((preg13_total_value + preg14_total_value + preg15_total_value + preg16_total_value )/4)/100*5

    //Construimos conocimiento
    valores_grafico[16] = preg17_total_value
    valores_grafico[17] = preg18_total_value
    valores_grafico[18] = preg19_total_value

    puntaje5 = ((preg17_total_value + preg18_total_value + preg19_total_value )/3)/100*5

    //Conquistamos el éxito en equipo
    valores_grafico[19] = preg20_total_value
    valores_grafico[20] = preg21_total_value
    valores_grafico[21] = preg22_total_value

    puntaje6 = ((preg20_total_value + preg21_total_value + preg22_total_value )/3)/100*5

    //¡Reconocemos! ¡Reconocemos! ¡Reconocemos!  
    valores_grafico[22] = preg23_total_value
    valores_grafico[23] = preg24_total_value
    valores_grafico[24] = preg25_total_value

    puntaje7 = ((preg23_total_value + preg24_total_value + preg25_total_value )/3)/100*5


    puntaje_final = (puntaje1 + puntaje2 + puntaje3 + puntaje4 + puntaje5 + puntaje6 + puntaje7)/ 35*100*0.05


  
    return (
      <div className="Inicial">
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

         <h1 className="title-h1">Reporte de Rendimiento - Voz de Campeones</h1>
         <form action="">
            <label className="label_title1">SELECCIONAR RESTAURANTE: </label>
            <Select value={restau} onChange={handleChangeRest}>
              {restaurantes_array.map((restaurantes_array) => (
                <MenuItem key={restaurantes_array.value} value={restaurantes_array.value}>
                  {restaurantes_array.label}
                </MenuItem>
              ))}
            </Select>
          </form>

          <div className="widget_container">
            <Widget cat={"Cantidad de respuestas"} value={cant_respuestas} />
            <Widget cat={"Creemos en toda la gente"} value={Math.round(puntaje1)} />
            <Widget cat={"Somos clientemaniacos (Interno)"} value={Math.round(puntaje2)} />
            <Widget cat={"Somos clientemaniacos (Externo)"} value={Math.round(puntaje3)} />
            <Widget cat={"Buscamos resultados extraordinarios"} value={Math.round(puntaje4)} />
            <Widget cat={"Construimos conocimiento"} value={Math.round(puntaje5)} />
            <Widget cat={"Conquistamos el éxito en equipo"} value={Math.round(puntaje6)} />
            <Widget cat={"¡Reconocemos! ¡Reconocemos! ¡Reconocemos!"} value={Math.round(puntaje7)} />
            <Widget cat={"Puntaje Total"} value={Math.round(puntaje_final)} />
          </div>
          
        
        <div className="voc_view">

          <Chart data1={valores_grafico.length === 0 ? [0, 0] : valores_grafico} />
          
        </div>

        <div class="footer_reportes_voc">
          <p className='voc_footer'>Grupo COMIDAS - 2022  </p>
        </div>
      </div>
    );
  }
  
  
  export default Inicial;