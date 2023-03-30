import '../styles/VocForm.css';
import logo from '../img/logo.png';
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Select, MenuItem,TextField } from "@mui/material";
import Axios from 'axios';
import {useForm} from "react-hook-form";

function VocForm() {

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
    { value: "PH10", label: "PH10" },
    { value: "PH11", label: "PH11" },
    { value: "PH12", label: "PH12" },
    { value: "PH13", label: "PH13" },
    { value: "PH14", label: "PH14" },
    { value: "PH15", label: "PH15" },
    { value: "PH16", label: "PH16" },
    { value: "PH17", label: "PH17" },
    { value: "PH18", label: "PH18" },
    { value: "PH19", label: "PH19" },
    { value: "PH20", label: "PH20" },
    { value: "PH21", label: "PH21" },
    { value: "PH22", label: "PH22" },
    { value: "PH23", label: "PH23" },
    { value: "PH24", label: "PH24" },
    { value: "PH25", label: "PH25" },
    { value: "PH26", label: "PH26" },
    { value: "PH27", label: "PH27" },
    { value: "PH28", label: "PH28" },
    { value: "PH29", label: "PH29" },
    { value: "PH30", label: "PH30" },
    { value: "PH31", label: "PH31" },
    { value: "PH32", label: "PH32" },
    { value: "PH33", label: "PH33" },
    { value: "PH34", label: "PH34" },
    { value: "PH35", label: "PH35" },
    { value: "PH36", label: "PH36" },
    { value: "PH37", label: "PH37" },
    { value: "PH38", label: "PH38" },
    { value: "PH39", label: "PH39" },
    { value: "PH40", label: "PH40" },
    { value: "PH41", label: "PH41" },
    { value: "PH42", label: "PH42" },
    { value: "PH43", label: "PH43" },
    { value: "PH44", label: "PH44" },
    { value: "PH45", label: "PH45" },
    { value: "PH46", label: "PH46" },
    { value: "PH47", label: "PH47" },
    { value: "PH48", label: "PH48" },
    { value: "PH49", label: "PH49" },
    { value: "PH50", label: "PH50" },
    { value: "PH51", label: "PH51" },
    { value: "PH52", label: "PH52" },
    { value: "PH53", label: "PH53" },
    { value: "PH54", label: "PH54" },
    { value: "PH55", label: "PH55" },
    { value: "PH56", label: "PH56" },
    { value: "PH57", label: "PH57" },
    { value: "PH58", label: "PH58" },
    { value: "PH59", label: "PH59" },
    { value: "PH60", label: "PH60" },
    { value: "PH61", label: "PH61" },
    { value: "PH62", label: "PH62" },
    { value: "PH63", label: "PH63" },
    { value: "PH64", label: "PH64" },
    { value: "PH65", label: "PH65" },
    { value: "PH66", label: "PH66" },
    { value: "PH67", label: "PH67" },
    { value: "PH68", label: "PH68" },
    { value: "PH69", label: "PH69" },
    { value: "PH70", label: "PH70" },
    { value: "KFC1", label: "KFC1" },
    { value: "KFC2", label: "KFC2" },
    { value: "KFC3", label: "KFC3" },
    { value: "KFC4", label: "KFC4" },
    { value: "KFC5", label: "KFC5" },
    { value: "KFC6", label: "KFC6" },
    { value: "KFC7", label: "KFC7" },
    { value: "KFC8", label: "KFC8" },
    { value: "KFC9", label: "KFC9" },
    { value: "KFC10", label: "KFC10" },
    { value: "KFC11", label: "KFC11" },
    { value: "KFC12", label: "KFC12" },
    { value: "KFC13", label: "KFC13" },
    { value: "KFC14", label: "KFC14" },
    { value: "KFC15", label: "KFC15" },
    { value: "KFC16", label: "KFC16" },
    { value: "KFC17", label: "KFC17" },
    { value: "KFC18", label: "KFC18" },
    { value: "KFC19", label: "KFC19" },
    { value: "KFC20", label: "KFC20" },
    { value: "KFC21", label: "KFC21" },
    { value: "KFC22", label: "KFC22" },
    { value: "KFC23", label: "KFC23" },
    { value: "KFC24", label: "KFC24" },
    { value: "KFC25", label: "KFC25" },
    { value: "KFC26", label: "KFC26" },
    { value: "KFC27", label: "KFC27" },
    { value: "KFC28", label: "KFC28" },
    { value: "KFC29", label: "KFC29" },
    { value: "KFC30", label: "KFC30" },
    { value: "DENNYS1", label: "DENNYS1" },
    { value: "DENNYS2", label: "DENNYS2" },
    { value: "DENNYS3", label: "DENNYS3" },
    { value: "DENNYS4", label: "DENNYS4" },
    { value: "DENNYS5", label: "DENNYS5" },
    { value: "DENNYS6", label: "DENNYS6" },
    { value: "DENNYS7", label: "DENNYS7" },
    { value: "DENNYS8", label: "DENNYS8" },
    { value: "DENNYS9", label: "DENNYS9" },
    { value: "DENNYS10", label: "DENNYS10" },
    { value: "DENNYS11", label: "DENNYS11" },
    { value: "DENNYS12", label: "DENNYS12" },
    { value: "DENNYS13", label: "DENNYS13" },
    { value: "DENNYS14", label: "DENNYS14" },
    { value: "DENNYS15", label: "DENNYS15" },
    { value: "DENNYS16", label: "DENNYS16" },
    { value: "DENNYS17", label: "DENNYS17" },
    { value: "DENNYS18", label: "DENNYS18" },
    { value: "DENNYS19", label: "DENNYS19" },
    { value: "DENNYS20", label: "DENNYS20" }
  ];

  const [getVocs, setListVocs] = useState([]);

  const [restau, setRestaurant] = useState("PH1");

  const handleChangeRest = (event) => {
    setRestaurant(event.target.value);
  };

  var d = new Date();
  var dateToday = d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
  
  var fecha, restaurante, 
  Mi_GGR_me_trata_como_si_yo_tuviera_el_potencial_de_hacer_una_diferencia,
  Mi_GGR_forma_un_equipo_diverso,
  Confio_en_mi_GGR,El_uniforme_que_recibo_es_de_mi_talla_e_incluye_un_gafete_con_mi_nombre,Tengo_un_ambiente_seguro_de_trabajo,
  Nuestro_horario_es_colocado_en_el_restaurante_al_menos_con_una_semana_de_anticipacion,
  Mi_GGR_asigna_turnos_de_manera_justa_y_de_acuerdo_a_nuestra_disponibilidad_acordada,
  Mi_equipo_se_apasiona_siempre_por_ser_clientemaniacos,
  Mi_GGR_da_el_ejemplo_de_Clientemania_y_nos_pide_que_nos_aseguremos_de_que_los_clientes_sean_nuestra_prioridad,
  He_sido_capacitado_completamente_sobre_como_ser_un_clientemaniaco,
  Nuestro_restaurante_siempre_esta_organizado_y_listo_para_los_clientes_incluso_cuando_esta_lleno,
  Si_les_preguntaran_a_nuestros_clientes_ellos_dirian_que_proveemos_un_gran_servicio,
  Los_miembros_de_equipo_de_mi_restaurante_siempre_llegan_puntualmente_al_trabajo,
  Mi_GGR_nos_ha_comunicado_la_meta_extraordinario_del_restaurante_a_mi_equipo_y_a_mi,
  Mi_GGR_me_alienta_siempre_a_tratar_y_lograr_resultados_extraordinarios_y_me_muestra_como_hacerlo,
  Recomendaria_a_mi_restauranre_como_un_gran_lugar_para_trabajar,
  Recibo_toda_la_capacitacion_que_necesito_para_poder_alcanzar_resultados_extraordinarios,
  Me_dan_coaching_y_retroalimentacion_con_regularidad_sobre_como_hacer_aun_mejor_mi_trabajo,
  Siento_que_tengo_oportunidades_para_crecer_profesionalmente_dentro_de_la_compañía,
  Mis_compañeros_y_yo_siempre_desmostramos_un_gran_trabajo_en_equipo,
  La_gente_de_nuestro_equipo_ayuda_aun_cuando_no_es_su_trabajo,
  Mis_colegas_y_yo_nos_alentamos_mutuamente_a_alcanzar_resultados_extraordinarios,
  Mi_GGR_crea_una_gran_cultura_de_reconocimiento_en_mi_restaurante,
  Puedo_dar_reconocimiento_a_cualquiera_en_mi_equipo_cada_vez_que_quiero_hacerlo,
  Todos_se_enteran_cuando_alguien_recibe_reconocimiento_en_mi_restaurante,
  Que_es_lo_que_aprecia_más_de_su_gerente,
  Como_podria_su_gerente_ser_aun_mas_efectivo  = "";

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    fecha = data.Fecha
    restaurante =  restau
    Mi_GGR_me_trata_como_si_yo_tuviera_el_potencial_de_hacer_una_diferencia = data.Preg_1
    Mi_GGR_forma_un_equipo_diverso = data.Preg_2
    Confio_en_mi_GGR = data.Preg_3
    El_uniforme_que_recibo_es_de_mi_talla_e_incluye_un_gafete_con_mi_nombre = data.Preg_4
    Tengo_un_ambiente_seguro_de_trabajo = data.Preg_5
    Nuestro_horario_es_colocado_en_el_restaurante_al_menos_con_una_semana_de_anticipacion = data.Preg_6
    Mi_GGR_asigna_turnos_de_manera_justa_y_de_acuerdo_a_nuestra_disponibilidad_acordada = data.Preg_7
    Mi_equipo_se_apasiona_siempre_por_ser_clientemaniacos = data.Preg_8
    Mi_GGR_da_el_ejemplo_de_Clientemania_y_nos_pide_que_nos_aseguremos_de_que_los_clientes_sean_nuestra_prioridad = data.Preg_9
    He_sido_capacitado_completamente_sobre_como_ser_un_clientemaniaco = data.Preg_10
    Nuestro_restaurante_siempre_esta_organizado_y_listo_para_los_clientes_incluso_cuando_esta_lleno = data.Preg_11
    Si_les_preguntaran_a_nuestros_clientes_ellos_dirian_que_proveemos_un_gran_servicio = data.Preg_12
    Los_miembros_de_equipo_de_mi_restaurante_siempre_llegan_puntualmente_al_trabajo = data.Preg_13
    Mi_GGR_nos_ha_comunicado_la_meta_extraordinario_del_restaurante_a_mi_equipo_y_a_mi = data.Preg_14
    Mi_GGR_me_alienta_siempre_a_tratar_y_lograr_resultados_extraordinarios_y_me_muestra_como_hacerlo = data.Preg_15
    Recomendaria_a_mi_restauranre_como_un_gran_lugar_para_trabajar = data.Preg_16
    Recibo_toda_la_capacitacion_que_necesito_para_poder_alcanzar_resultados_extraordinarios = data.Preg_17
    Me_dan_coaching_y_retroalimentacion_con_regularidad_sobre_como_hacer_aun_mejor_mi_trabajo = data.Preg_18
    Siento_que_tengo_oportunidades_para_crecer_profesionalmente_dentro_de_la_compañía = data.Preg_19
    Mis_compañeros_y_yo_siempre_desmostramos_un_gran_trabajo_en_equipo = data.Preg_20
    La_gente_de_nuestro_equipo_ayuda_aun_cuando_no_es_su_trabajo = data.Preg_21
    Mis_colegas_y_yo_nos_alentamos_mutuamente_a_alcanzar_resultados_extraordinarios = data.Preg_22
    Mi_GGR_crea_una_gran_cultura_de_reconocimiento_en_mi_restaurante = data.Preg_23
    Puedo_dar_reconocimiento_a_cualquiera_en_mi_equipo_cada_vez_que_quiero_hacerlo = data.Preg_24
    Todos_se_enteran_cuando_alguien_recibe_reconocimiento_en_mi_restaurante = data.Preg_25
    Que_es_lo_que_aprecia_más_de_su_gerente = data.Preg_26
    Como_podria_su_gerente_ser_aun_mas_efectivo = data.Preg_27


    Axios.post("http://localhost:3001/submitVOC",{
      fecha,
      restaurante, 
      Mi_GGR_me_trata_como_si_yo_tuviera_el_potencial_de_hacer_una_diferencia,
      Mi_GGR_forma_un_equipo_diverso,
      Confio_en_mi_GGR 
      ,El_uniforme_que_recibo_es_de_mi_talla_e_incluye_un_gafete_con_mi_nombre,Tengo_un_ambiente_seguro_de_trabajo,
      Nuestro_horario_es_colocado_en_el_restaurante_al_menos_con_una_semana_de_anticipacion,
      Mi_GGR_asigna_turnos_de_manera_justa_y_de_acuerdo_a_nuestra_disponibilidad_acordada,
      Mi_equipo_se_apasiona_siempre_por_ser_clientemaniacos,
      Mi_GGR_da_el_ejemplo_de_Clientemania_y_nos_pide_que_nos_aseguremos_de_que_los_clientes_sean_nuestra_prioridad,
      He_sido_capacitado_completamente_sobre_como_ser_un_clientemaniaco,
      Nuestro_restaurante_siempre_esta_organizado_y_listo_para_los_clientes_incluso_cuando_esta_lleno,
      Si_les_preguntaran_a_nuestros_clientes_ellos_dirian_que_proveemos_un_gran_servicio,
      Los_miembros_de_equipo_de_mi_restaurante_siempre_llegan_puntualmente_al_trabajo,
      Mi_GGR_nos_ha_comunicado_la_meta_extraordinario_del_restaurante_a_mi_equipo_y_a_mi,
      Mi_GGR_me_alienta_siempre_a_tratar_y_lograr_resultados_extraordinarios_y_me_muestra_como_hacerlo,
      Recomendaria_a_mi_restauranre_como_un_gran_lugar_para_trabajar,
      Recibo_toda_la_capacitacion_que_necesito_para_poder_alcanzar_resultados_extraordinarios,
      Me_dan_coaching_y_retroalimentacion_con_regularidad_sobre_como_hacer_aun_mejor_mi_trabajo,
      Siento_que_tengo_oportunidades_para_crecer_profesionalmente_dentro_de_la_compañía,
      Mis_compañeros_y_yo_siempre_desmostramos_un_gran_trabajo_en_equipo,
      La_gente_de_nuestro_equipo_ayuda_aun_cuando_no_es_su_trabajo,
      Mis_colegas_y_yo_nos_alentamos_mutuamente_a_alcanzar_resultados_extraordinarios,
      Mi_GGR_crea_una_gran_cultura_de_reconocimiento_en_mi_restaurante,
      Puedo_dar_reconocimiento_a_cualquiera_en_mi_equipo_cada_vez_que_quiero_hacerlo,
      Todos_se_enteran_cuando_alguien_recibe_reconocimiento_en_mi_restaurante,
      Que_es_lo_que_aprecia_más_de_su_gerente,
      Como_podria_su_gerente_ser_aun_mas_efectivo
      })
      .then(response => {
        console.log(response)
        document.getElementById("vocForm").reset();
      })
      .catch(error => {
        console.log(error)
      })
  
  };
 
  return (
    <div className='VocForms'>
        <div>
          <img class="img-logo" src={logo} alt="gc-logo" />
      </div>
      <input  value={dateToday}  {...register("Fecha", { required: {value: true, message: 'Campo requeridos'} })} hidden="true"/>
      <form id="vocForm" onSubmit={handleSubmit(onSubmit)}>
      <div class="rb-box">
      <label className="label_titleform">SELECCIONAR RESTAURANTE: </label>
            <Select value={restau} onChange={handleChangeRest}>
              {restaurantes_array.map((restaurantes_array) => (
                <MenuItem key={restaurantes_array.value} value={restaurantes_array.value}>
                  {restaurantes_array.label}
                </MenuItem>
              ))}
            </Select>
               
       <div id="div1">
       <br/>
        <label className="label_titleform"><b>Creemos en TODA la Gente</b></label>
        <div>{errors.Preg_1 && <span>{errors.Preg_1.message}</span>}</div>       
            <p>1. Mi GGR me trata como si yo tuviera el potencial de hacer una diferencia. <sup>*</sup></p>
            <div id="rb-1" class="rb">
              <div class="rb-tab" data-value="1">
                <div class="rb-spot">
                <label class="calificacion">1</label>
                <input class="rb-txt" type='radio' value='1'  {...register("Preg_1", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="2">
                <div class="rb-spot">
                <label class="calificacion">2</label>
                <input class="rb-txt" type='radio' value='2'  {...register("Preg_1", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="3">
                <div class="rb-spot">
                <label class="calificacion">3</label>
                <input class="rb-txt" type='radio' value='3'  {...register("Preg_1", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="4">
                <div class="rb-spot">
                <label class="calificacion">4</label>
                <input class="rb-txt" type='radio' value='4'  {...register("Preg_1", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="5">
                <div class="rb-spot">
                <label class="calificacion">5</label>
                <input class="rb-txt" type='radio' value='5'  {...register("Preg_1", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div>
            </div>

            <div>{errors.Preg_2 && <span>{errors.Preg_2.message}</span>}</div>  
            <p>2. Mi GGR forma un equipo diverso. <sup>*</sup></p>
            <div id="rb-2" class="rb">
              <div class="rb-tab" data-value="1">
                <div class="rb-spot">
                <label class="calificacion">1</label>
                <input class="rb-txt" type='radio' value='1' {...register("Preg_2", { required: {value: true, message: 'Campo requeridos'} })} />
                </div>
              </div><div class="rb-tab" data-value="2">
                <div class="rb-spot">
                <label class="calificacion">2</label>
                <input class="rb-txt" type='radio' value='2'  {...register("Preg_2", { required: {value: true, message: 'Campo requeridos'} })}  />
                </div>
              </div><div class="rb-tab" data-value="3">
                <div class="rb-spot">
                <label class="calificacion">3</label>
                <input class="rb-txt" type='radio' value='3'   {...register("Preg_2", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="4">
                <div class="rb-spot">
                <label class="calificacion">4</label>
                <input class="rb-txt" type='radio' value='4'   {...register("Preg_2", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="5">
                <div class="rb-spot">
                <label class="calificacion">5</label>
                <input class="rb-txt" type='radio' value='5'  {...register("Preg_2", { required: {value: true, message: 'Campo requeridos'} })} />
                </div>
              </div>
            </div>
          
            <div>{errors.Preg_3 && <span>{errors.Preg_3.message}</span>}</div>  
            <p>3. Confío en mi GGR. <sup>*</sup></p>
            <div id="rb-3" class="rb">
              <div class="rb-tab" data-value="1">
                <div class="rb-spot">
                <label class="calificacion">1</label>
                <input class="rb-txt" type='radio' value='1'  {...register("Preg_3", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="2">
                <div class="rb-spot">
                <label class="calificacion">2</label>
                <input class="rb-txt" type='radio' value='2'  {...register("Preg_3", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="3">
                <div class="rb-spot">
                <label class="calificacion">3</label>
                <input class="rb-txt" type='radio' value='3'  {...register("Preg_3", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="4">
                <div class="rb-spot">
                <label class="calificacion">4</label>
                <input class="rb-txt" type='radio' value='4' {...register("Preg_3", { required: {value: true, message: 'Campo requeridos'} })} />
                </div>
              </div><div class="rb-tab" data-value="5">
                <div class="rb-spot">
                <label class="calificacion">5</label>
                <input class="rb-txt" type='radio' value='5'  {...register("Preg_3", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div>
            </div>
          
            <label className="label_titleform"><b>Somos clientemaniacos(Interno)</b></label>
            <div>{errors.Preg_4 && <span>{errors.Preg_4.message}</span>}</div>  
            <p>4. El uniforme que recibo es de mi talla e incluye un gafete con mi nombre. <sup>*</sup></p>
            <div id="rb-4" class="rb">
              <div class="rb-tab" data-value="1">
                <div class="rb-spot">
                <label class="calificacion">1</label>
                <input class="rb-txt" type='radio' value='1'  {...register("Preg_4", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="2">
                <div class="rb-spot">
                <label class="calificacion">2</label>
                <input class="rb-txt" type='radio' value='2' {...register("Preg_4", { required: {value: true, message: 'Campo requeridos'} })} />
                </div>
              </div><div class="rb-tab" data-value="3">
                <div class="rb-spot">
                <label class="calificacion">3</label>
                <input class="rb-txt" type='radio' value='3'  {...register("Preg_4", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="4">
                <div class="rb-spot">
                <label class="calificacion">4</label>
                <input class="rb-txt" type='radio' value='4'  {...register("Preg_4", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="5">
                <div class="rb-spot">
                <label class="calificacion">5</label>
                <input class="rb-txt" type='radio' value='5'  {...register("Preg_4", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div>
            </div>
          
            <div>{errors.Preg_5 && <span>{errors.Preg_5.message}</span>}</div>  
            <p>5. Tengo un ambiente seguro de trabajo. <sup>*</sup></p>
            <div id="rb-5" class="rb">
              <div class="rb-tab" data-value="1">
                <div class="rb-spot">
                <label class="calificacion">1</label>
                <input class="rb-txt" type='radio' value='1'  {...register("Preg_5", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="2">
                <div class="rb-spot">
                <label class="calificacion">2</label>
                <input class="rb-txt" type='radio' value='2'  {...register("Preg_5", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="3">
                <div class="rb-spot">
                <label class="calificacion">3</label>
                <input class="rb-txt" type='radio' value='3'  {...register("Preg_5", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="4">
                <div class="rb-spot">
                <label class="calificacion">4</label>
                <input class="rb-txt" type='radio' value='4' {...register("Preg_5", { required: {value: true, message: 'Campo requeridos'} })} />
                </div>
              </div><div class="rb-tab" data-value="5">
                <div class="rb-spot">
                <label class="calificacion">5</label>
                <input class="rb-txt" type='radio' value='5'  {...register("Preg_5", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div>
            </div>

            <div>{errors.Preg_6 && <span>{errors.Preg_6.message}</span>}</div>  
            <p>6. Nuestro horario es colocado en el restaurante al menos con una semana de anticipación. <sup>*</sup></p>
            <div id="rb-5" class="rb">
              <div class="rb-tab" data-value="1">
                <div class="rb-spot">
                <label class="calificacion">1</label>
                <input class="rb-txt" type='radio' value='1'  {...register("Preg_6", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="2">
                <div class="rb-spot">
                <label class="calificacion">2</label>
                <input class="rb-txt" type='radio' value='2'  {...register("Preg_6", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="3">
                <div class="rb-spot">
                <label class="calificacion">3</label>
                <input class="rb-txt" type='radio' value='3'  {...register("Preg_6", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div><div class="rb-tab" data-value="4">
                <div class="rb-spot">
                <label class="calificacion">4</label>
                <input class="rb-txt" type='radio' value='4' {...register("Preg_6", { required: {value: true, message: 'Campo requeridos'} })} />
                </div>
              </div><div class="rb-tab" data-value="5">
                <div class="rb-spot">
                <label class="calificacion">5</label>
                <input class="rb-txt" type='radio' value='5'  {...register("Preg_6", { required: {value: true, message: 'Campo requeridos'} })}/>
                </div>
              </div>
            </div>
      

          <div>{errors.Preg_7 && <span>{errors.Preg_7.message}</span>}</div>  
          <p>7. Mi GGR asigna turnos de manera justa y de acuerdo a nuestra disponibilidad acordada. <sup>*</sup></p>
          <div id="rb-5" class="rb">
            <div class="rb-tab" data-value="1">
              <div class="rb-spot">
              <label class="calificacion">1</label>
              <input class="rb-txt" type='radio' value='1'  {...register("Preg_7", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="2">
              <div class="rb-spot">
              <label class="calificacion">2</label>
              <input class="rb-txt" type='radio' value='2'  {...register("Preg_7", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="3">
              <div class="rb-spot">
              <label class="calificacion">3</label>
              <input class="rb-txt" type='radio' value='3'  {...register("Preg_7", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="4">
              <div class="rb-spot">
              <label class="calificacion">4</label>
              <input class="rb-txt" type='radio' value='4' {...register("Preg_7", { required: {value: true, message: 'Campo requeridos'} })} />
              </div>
            </div><div class="rb-tab" data-value="5">
              <div class="rb-spot">
              <label class="calificacion">5</label>
              <input class="rb-txt" type='radio' value='5'  {...register("Preg_7", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div>
          </div>
      </div>

      <div id="div2">
        <label className="label_titleform"><b>Somos clientemaniacos(Externo)</b></label>

        <div>{errors.Preg_8 && <span>{errors.Preg_8.message}</span>}</div>  
        <p>8. Mi equipo se apasiona siempre por ser clientemaniacos. <sup>*</sup></p>
        <div id="rb-5" class="rb">
          <div class="rb-tab" data-value="1">
            <div class="rb-spot">
            <label class="calificacion">1</label>
            <input class="rb-txt" type='radio' value='1'  {...register("Preg_8", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="2">
            <div class="rb-spot">
            <label class="calificacion">2</label>
            <input class="rb-txt" type='radio' value='2'  {...register("Preg_8", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="3">
            <div class="rb-spot">
            <label class="calificacion">3</label>
            <input class="rb-txt" type='radio' value='3'  {...register("Preg_8", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="4">
            <div class="rb-spot">
            <label class="calificacion">4</label>
            <input class="rb-txt" type='radio' value='4' {...register("Preg_8", { required: {value: true, message: 'Campo requeridos'} })} />
            </div>
          </div><div class="rb-tab" data-value="5">
            <div class="rb-spot">
            <label class="calificacion">5</label>
            <input class="rb-txt" type='radio' value='5'  {...register("Preg_8", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div>
        </div>

        <div>{errors.Preg_9 && <span>{errors.Preg_9.message}</span>}</div>  
        <p>9. Mi GGR da el ejemplo de Clientemania y nos pide que nos aseguremos de que los clientes sean nuestra prioridad. <sup>*</sup></p>
        <div id="rb-5" class="rb">
          <div class="rb-tab" data-value="1">
            <div class="rb-spot">
            <label class="calificacion">1</label>
            <input class="rb-txt" type='radio' value='1'  {...register("Preg_9", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="2">
            <div class="rb-spot">
            <label class="calificacion">2</label>
            <input class="rb-txt" type='radio' value='2'  {...register("Preg_9", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="3">
            <div class="rb-spot">
            <label class="calificacion">3</label>
            <input class="rb-txt" type='radio' value='3'  {...register("Preg_9", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="4">
            <div class="rb-spot">
            <label class="calificacion">4</label>
            <input class="rb-txt" type='radio' value='4' {...register("Preg_9", { required: {value: true, message: 'Campo requeridos'} })} />
            </div>
          </div><div class="rb-tab" data-value="5">
            <div class="rb-spot">
            <label class="calificacion">5</label>
            <input class="rb-txt" type='radio' value='5'  {...register("Preg_9", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div>
        </div>

        <div>{errors.Preg_10 && <span>{errors.Preg_10.message}</span>}</div>  
        <p>10. He sido capacitado completamente sobre como ser un clientemaniaco. <sup>*</sup></p>
        <div id="rb-5" class="rb">
          <div class="rb-tab" data-value="1">
            <div class="rb-spot">
            <label class="calificacion">1</label>
            <input class="rb-txt" type='radio' value='1'  {...register("Preg_10", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="2">
            <div class="rb-spot">
            <label class="calificacion">2</label>
            <input class="rb-txt" type='radio' value='2'  {...register("Preg_10", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="3">
            <div class="rb-spot">
            <label class="calificacion">3</label>
            <input class="rb-txt" type='radio' value='3'  {...register("Preg_10", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="4">
            <div class="rb-spot">
            <label class="calificacion">4</label>
            <input class="rb-txt" type='radio' value='4' {...register("Preg_10", { required: {value: true, message: 'Campo requeridos'} })} />
            </div>
          </div><div class="rb-tab" data-value="5">
            <div class="rb-spot">
            <label class="calificacion">5</label>
            <input class="rb-txt" type='radio' value='5'  {...register("Preg_10", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div>
        </div>

        <div>{errors.Preg_11 && <span>{errors.Preg_11.message}</span>}</div>  
        <p>11. Nuestro restaurante siempre esta organizado y listo para los clientes, incluso cuando esta lleno. <sup>*</sup></p>
        <div id="rb-5" class="rb">
          <div class="rb-tab" data-value="1">
            <div class="rb-spot">
            <label class="calificacion">1</label>
            <input class="rb-txt" type='radio' value='1'  {...register("Preg_11", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="2">
            <div class="rb-spot">
            <label class="calificacion">2</label>
            <input class="rb-txt" type='radio' value='2'  {...register("Preg_11", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="3">
            <div class="rb-spot">
            <label class="calificacion">3</label>
            <input class="rb-txt" type='radio' value='3'  {...register("Preg_11", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="4">
            <div class="rb-spot">
            <label class="calificacion">4</label>
            <input class="rb-txt" type='radio' value='4' {...register("Preg_11", { required: {value: true, message: 'Campo requeridos'} })} />
            </div>
          </div><div class="rb-tab" data-value="5">
            <div class="rb-spot">
            <label class="calificacion">5</label>
            <input class="rb-txt" type='radio' value='5'  {...register("Preg_11", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div>
        </div>

        <div>{errors.Preg_12 && <span>{errors.Preg_12.message}</span>}</div>  
        <p>12. Si les preguntaran a nuestros clientes, ellos dirian que proveemos un gran servicio. <sup>*</sup></p>
        <div id="rb-5" class="rb">
          <div class="rb-tab" data-value="1">
            <div class="rb-spot">
            <label class="calificacion">1</label>
            <input class="rb-txt" type='radio' value='1'  {...register("Preg_12", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="2">
            <div class="rb-spot">
            <label class="calificacion">2</label>
            <input class="rb-txt" type='radio' value='2'  {...register("Preg_12", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="3">
            <div class="rb-spot">
            <label class="calificacion">3</label>
            <input class="rb-txt" type='radio' value='3'  {...register("Preg_12", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="4">
            <div class="rb-spot">
            <label class="calificacion">4</label>
            <input class="rb-txt" type='radio' value='4' {...register("Preg_12", { required: {value: true, message: 'Campo requeridos'} })} />
            </div>
          </div><div class="rb-tab" data-value="5">
            <div class="rb-spot">
            <label class="calificacion">5</label>
            <input class="rb-txt" type='radio' value='5'  {...register("Preg_12", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div>
        </div>

      </div>

      <div id="div3">
        <label className="label_titleform"><b>Buscamos resultados extraordinarios</b></label>

        <div>{errors.Preg_13 && <span>{errors.Preg_13.message}</span>}</div>  
        <p>13. Los miembros de equipo de mi restaurante siempre llegan puntualmente al trabajo. <sup>*</sup></p>
        <div id="rb-5" class="rb">
          <div class="rb-tab" data-value="1">
            <div class="rb-spot">
            <label class="calificacion">1</label>
            <input class="rb-txt" type='radio' value='1'  {...register("Preg_13", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="2">
            <div class="rb-spot">
            <label class="calificacion">2</label>
            <input class="rb-txt" type='radio' value='2'  {...register("Preg_13", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="3">
            <div class="rb-spot">
            <label class="calificacion">3</label>
            <input class="rb-txt" type='radio' value='3'  {...register("Preg_13", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="4">
            <div class="rb-spot">
            <label class="calificacion">4</label>
            <input class="rb-txt" type='radio' value='4' {...register("Preg_13", { required: {value: true, message: 'Campo requeridos'} })} />
            </div>
          </div><div class="rb-tab" data-value="5">
            <div class="rb-spot">
            <label class="calificacion">5</label>
            <input class="rb-txt" type='radio' value='5'  {...register("Preg_13", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div>
        </div>

        <div>{errors.Preg_14 && <span>{errors.Preg_14.message}</span>}</div>  
        <p>14. Mi GGR nos ha comunicado la meta extraordinario del restaurante a mi equipo y a mi. <sup>*</sup></p>
        <div id="rb-5" class="rb">
          <div class="rb-tab" data-value="1">
            <div class="rb-spot">
            <label class="calificacion">1</label>
            <input class="rb-txt" type='radio' value='1'  {...register("Preg_14", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="2">
            <div class="rb-spot">
            <label class="calificacion">2</label>
            <input class="rb-txt" type='radio' value='2'  {...register("Preg_14", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="3">
            <div class="rb-spot">
            <label class="calificacion">3</label>
            <input class="rb-txt" type='radio' value='3'  {...register("Preg_14", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="4">
            <div class="rb-spot">
            <label class="calificacion">4</label>
            <input class="rb-txt" type='radio' value='4' {...register("Preg_14", { required: {value: true, message: 'Campo requeridos'} })} />
            </div>
          </div><div class="rb-tab" data-value="5">
            <div class="rb-spot">
            <label class="calificacion">5</label>
            <input class="rb-txt" type='radio' value='5'  {...register("Preg_14", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div>
        </div>

        <div>{errors.Preg_15 && <span>{errors.Preg_15.message}</span>}</div>  
        <p>15. Mi GGR me alienta siempre a tratar y lograr resultados extraordinarios y me muestra como hacerlo. <sup>*</sup></p>
        <div id="rb-5" class="rb">
          <div class="rb-tab" data-value="1">
            <div class="rb-spot">
            <label class="calificacion">1</label>
            <input class="rb-txt" type='radio' value='1'  {...register("Preg_15", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="2">
            <div class="rb-spot">
            <label class="calificacion">2</label>
            <input class="rb-txt" type='radio' value='2'  {...register("Preg_15", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="3">
            <div class="rb-spot">
            <label class="calificacion">3</label>
            <input class="rb-txt" type='radio' value='3'  {...register("Preg_15", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="4">
            <div class="rb-spot">
            <label class="calificacion">4</label>
            <input class="rb-txt" type='radio' value='4' {...register("Preg_15", { required: {value: true, message: 'Campo requeridos'} })} />
            </div>
          </div><div class="rb-tab" data-value="5">
            <div class="rb-spot">
            <label class="calificacion">5</label>
            <input class="rb-txt" type='radio' value='5'  {...register("Preg_15", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div>
        </div>

        <div>{errors.Preg_16 && <span>{errors.Preg_16.message}</span>}</div>  
        <p>16. Recomendaria a mi restauranre como un gran lugar para trabajar. <sup>*</sup></p>
        <div id="rb-5" class="rb">
          <div class="rb-tab" data-value="1">
            <div class="rb-spot">
            <label class="calificacion">1</label>
            <input class="rb-txt" type='radio' value='1'  {...register("Preg_16", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="2">
            <div class="rb-spot">
            <label class="calificacion">2</label>
            <input class="rb-txt" type='radio' value='2'  {...register("Preg_16", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="3">
            <div class="rb-spot">
            <label class="calificacion">3</label>
            <input class="rb-txt" type='radio' value='3'  {...register("Preg_16", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div><div class="rb-tab" data-value="4">
            <div class="rb-spot">
            <label class="calificacion">4</label>
            <input class="rb-txt" type='radio' value='4' {...register("Preg_16", { required: {value: true, message: 'Campo requeridos'} })} />
            </div>
          </div><div class="rb-tab" data-value="5">
            <div class="rb-spot">
            <label class="calificacion">5</label>
            <input class="rb-txt" type='radio' value='5'  {...register("Preg_16", { required: {value: true, message: 'Campo requeridos'} })}/>
            </div>
          </div>
        </div>
      </div>
          

         

          <label className="label_titleform"><b>Construimos conocimiento</b></label>

          <div>{errors.Preg_17 && <span>{errors.Preg_17.message}</span>}</div>  
          <p>17. Recibo toda la capacitacion que necesito para poder alcanzar resultados extraordinarios. <sup>*</sup></p>
          <div id="rb-5" class="rb">
            <div class="rb-tab" data-value="1">
              <div class="rb-spot">
              <label class="calificacion">1</label>
              <input class="rb-txt" type='radio' value='1'  {...register("Preg_17", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="2">
              <div class="rb-spot">
              <label class="calificacion">2</label>
              <input class="rb-txt" type='radio' value='2'  {...register("Preg_17", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="3">
              <div class="rb-spot">
              <label class="calificacion">3</label>
              <input class="rb-txt" type='radio' value='3'  {...register("Preg_17", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="4">
              <div class="rb-spot">
              <label class="calificacion">4</label>
              <input class="rb-txt" type='radio' value='4' {...register("Preg_17", { required: {value: true, message: 'Campo requeridos'} })} />
              </div>
            </div><div class="rb-tab" data-value="5">
              <div class="rb-spot">
              <label class="calificacion">5</label>
              <input class="rb-txt" type='radio' value='5'  {...register("Preg_17", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div>
          </div>

          <div>{errors.Preg_18 && <span>{errors.Preg_18.message}</span>}</div>  
          <p>18. Me dan coaching y retroalimentacion con regularidad sobre como hacer aun mejor mi trabajo. <sup>*</sup></p>
          <div id="rb-5" class="rb">
            <div class="rb-tab" data-value="1">
              <div class="rb-spot">
              <label class="calificacion">1</label>
              <input class="rb-txt" type='radio' value='1'  {...register("Preg_18", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="2">
              <div class="rb-spot">
              <label class="calificacion">2</label>
              <input class="rb-txt" type='radio' value='2'  {...register("Preg_18", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="3">
              <div class="rb-spot">
              <label class="calificacion">3</label>
              <input class="rb-txt" type='radio' value='3'  {...register("Preg_18", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="4">
              <div class="rb-spot">
              <label class="calificacion">4</label>
              <input class="rb-txt" type='radio' value='4' {...register("Preg_18", { required: {value: true, message: 'Campo requeridos'} })} />
              </div>
            </div><div class="rb-tab" data-value="5">
              <div class="rb-spot">
              <label class="calificacion">5</label>
              <input class="rb-txt" type='radio' value='5'  {...register("Preg_18", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div>
          </div>

          <div>{errors.Preg_19 && <span>{errors.Preg_19.message}</span>}</div>  
          <p>19. Siento que tengo oportunidades para crecer profesionalmente dentro de la compañía. <sup>*</sup></p>
          <div id="rb-5" class="rb">
            <div class="rb-tab" data-value="1">
              <div class="rb-spot">
              <label class="calificacion">1</label>
              <input class="rb-txt" type='radio' value='1'  {...register("Preg_19", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="2">
              <div class="rb-spot">
              <label class="calificacion">2</label>
              <input class="rb-txt" type='radio' value='2'  {...register("Preg_19", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="3">
              <div class="rb-spot">
              <label class="calificacion">3</label>
              <input class="rb-txt" type='radio' value='3'  {...register("Preg_19", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="4">
              <div class="rb-spot">
              <label class="calificacion">4</label>
              <input class="rb-txt" type='radio' value='4' {...register("Preg_19", { required: {value: true, message: 'Campo requeridos'} })} />
              </div>
            </div><div class="rb-tab" data-value="5">
              <div class="rb-spot">
              <label class="calificacion">5</label>
              <input class="rb-txt" type='radio' value='5'  {...register("Preg_19", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div>
          </div>

          <label className="label_titleform"><b>Conquistamos el éxito en equipo</b></label>

          <div>{errors.Preg_20 && <span>{errors.Preg_20.message}</span>}</div>  
          <p>20. Mis compañeros y yo siempre demostramos un gran trabajo en equipo. <sup>*</sup></p>
          <div id="rb-5" class="rb">
            <div class="rb-tab" data-value="1">
              <div class="rb-spot">
              <label class="calificacion">1</label>
              <input class="rb-txt" type='radio' value='1'  {...register("Preg_20", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="2">
              <div class="rb-spot">
              <label class="calificacion">2</label>
              <input class="rb-txt" type='radio' value='2'  {...register("Preg_20", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="3">
              <div class="rb-spot">
              <label class="calificacion">3</label>
              <input class="rb-txt" type='radio' value='3'  {...register("Preg_20", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="4">
              <div class="rb-spot">
              <label class="calificacion">4</label>
              <input class="rb-txt" type='radio' value='4' {...register("Preg_20", { required: {value: true, message: 'Campo requeridos'} })} />
              </div>
            </div><div class="rb-tab" data-value="5">
              <div class="rb-spot">
              <label class="calificacion">5</label>
              <input class="rb-txt" type='radio' value='5'  {...register("Preg_20", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div>
          </div>

          <div>{errors.Preg_21 && <span>{errors.Preg_21.message}</span>}</div>  
          <p>21. La gente de nuestro equipo ayuda aun cuando no es su trabajo. <sup>*</sup></p>
          <div id="rb-5" class="rb">
            <div class="rb-tab" data-value="1">
              <div class="rb-spot">
              <label class="calificacion">1</label>
              <input class="rb-txt" type='radio' value='1'  {...register("Preg_21", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="2">
              <div class="rb-spot">
              <label class="calificacion">2</label>
              <input class="rb-txt" type='radio' value='2'  {...register("Preg_21", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="3">
              <div class="rb-spot">
              <label class="calificacion">3</label>
              <input class="rb-txt" type='radio' value='3'  {...register("Preg_21", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="4">
              <div class="rb-spot">
              <label class="calificacion">4</label>
              <input class="rb-txt" type='radio' value='4' {...register("Preg_21", { required: {value: true, message: 'Campo requeridos'} })} />
              </div>
            </div><div class="rb-tab" data-value="5">
              <div class="rb-spot">
              <label class="calificacion">5</label>
              <input class="rb-txt" type='radio' value='5'  {...register("Preg_21", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div>
          </div>

          <div>{errors.Preg_22 && <span>{errors.Preg_22.message}</span>}</div>  
          <p>22. Mis colegas y yo nos alentamos mutuamente a alcanzar resultados extraordinarios. <sup>*</sup></p>
          <div id="rb-5" class="rb">
            <div class="rb-tab" data-value="1">
              <div class="rb-spot">
              <label class="calificacion">1</label>
              <input class="rb-txt" type='radio' value='1'  {...register("Preg_22", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="2">
              <div class="rb-spot">
              <label class="calificacion">2</label>
              <input class="rb-txt" type='radio' value='2'  {...register("Preg_22", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="3">
              <div class="rb-spot">
              <label class="calificacion">3</label>
              <input class="rb-txt" type='radio' value='3'  {...register("Preg_22", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="4">
              <div class="rb-spot">
              <label class="calificacion">4</label>
              <input class="rb-txt" type='radio' value='4' {...register("Preg_22", { required: {value: true, message: 'Campo requeridos'} })} />
              </div>
            </div><div class="rb-tab" data-value="5">
              <div class="rb-spot">
              <label class="calificacion">5</label>
              <input class="rb-txt" type='radio' value='5'  {...register("Preg_22", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div>
          </div>

          <label className="label_titleform"><b>¡Reconocemos! ¡Reconocemos! ¡Reconocemos!</b></label>

          <div>{errors.Preg_23 && <span>{errors.Preg_23.message}</span>}</div>  
          <p>23. Mi GGR crea una gran cultura de reconocimiento en mi restaurante. <sup>*</sup></p>
          <div id="rb-5" class="rb">
            <div class="rb-tab" data-value="1">
              <div class="rb-spot">
              <label class="calificacion">1</label>
              <input class="rb-txt" type='radio' value='1'  {...register("Preg_23", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="2">
              <div class="rb-spot">
              <label class="calificacion">2</label>
              <input class="rb-txt" type='radio' value='2'  {...register("Preg_23", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="3">
              <div class="rb-spot">
              <label class="calificacion">3</label>
              <input class="rb-txt" type='radio' value='3'  {...register("Preg_23", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="4">
              <div class="rb-spot">
              <label class="calificacion">4</label>
              <input class="rb-txt" type='radio' value='4' {...register("Preg_23", { required: {value: true, message: 'Campo requeridos'} })} />
              </div>
            </div><div class="rb-tab" data-value="5">
              <div class="rb-spot">
              <label class="calificacion">5</label>
              <input class="rb-txt" type='radio' value='5'  {...register("Preg_23", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div>
          </div>

          <div>{errors.Preg_24 && <span>{errors.Preg_24.message}</span>}</div>  
          <p>24. Puedo dar reconocimiento a cualquiera en mi equipo cada vez que quiero hacerlo. <sup>*</sup></p>
          <div id="rb-5" class="rb">
            <div class="rb-tab" data-value="1">
              <div class="rb-spot">
              <label class="calificacion">1</label>
              <input class="rb-txt" type='radio' value='1'  {...register("Preg_24", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="2">
              <div class="rb-spot">
              <label class="calificacion">2</label>
              <input class="rb-txt" type='radio' value='2'  {...register("Preg_24", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="3">
              <div class="rb-spot">
              <label class="calificacion">3</label>
              <input class="rb-txt" type='radio' value='3'  {...register("Preg_24", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="4">
              <div class="rb-spot">
              <label class="calificacion">4</label>
              <input class="rb-txt" type='radio' value='4' {...register("Preg_24", { required: {value: true, message: 'Campo requeridos'} })} />
              </div>
            </div><div class="rb-tab" data-value="5">
              <div class="rb-spot">
              <label class="calificacion">5</label>
              <input class="rb-txt" type='radio' value='5'  {...register("Preg_24", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div>
          </div>

          <div>{errors.Preg_25 && <span>{errors.Preg_25.message}</span>}</div>  
          <p>25. Todos se enteran cuando alguien recibe reconocimiento en mi restaurante. <sup>*</sup></p>
          <div id="rb-5" class="rb">
            <div class="rb-tab" data-value="1">
              <div class="rb-spot">
              <label class="calificacion">1</label>
              <input class="rb-txt" type='radio' value='1'  {...register("Preg_25", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="2">
              <div class="rb-spot">
              <label class="calificacion">2</label>
              <input class="rb-txt" type='radio' value='2'  {...register("Preg_25", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="3">
              <div class="rb-spot">
              <label class="calificacion">3</label>
              <input class="rb-txt" type='radio' value='3'  {...register("Preg_25", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div><div class="rb-tab" data-value="4">
              <div class="rb-spot">
              <label class="calificacion">4</label>
              <input class="rb-txt" type='radio' value='4' {...register("Preg_25", { required: {value: true, message: 'Campo requeridos'} })} />
              </div>
            </div><div class="rb-tab" data-value="5">
              <div class="rb-spot">
              <label class="calificacion">5</label>
              <input class="rb-txt" type='radio' value='5'  {...register("Preg_25", { required: {value: true, message: 'Campo requeridos'} })}/>
              </div>
            </div>
          </div>


          <div id="text_area">
            <div>{errors.Preg_26 && <span>{errors.Preg_26.message}</span>}</div>  
            <p>26. Que es lo que aprecia mas de su gerente? <sup>*</sup></p>
            <TextField fullWidth label="" id="fullWidth" {...register("Preg_26", { required: {value: true, message: 'Campo requeridos'} })} />
          </div>

          <div id="text_area">
            <div>{errors.Preg_27 && <span>{errors.Preg_27.message}</span>}</div>  
            <p>27. Como podria su gerente ser aun mas efectivo? <sup>*</sup></p>
            <TextField fullWidth label="" id="fullWidth" {...register("Preg_27", { required: {value: true, message: 'Campo requeridos'} })}/>
          </div>

          
        
          <div id="buttons_container">
            <button  class="button trigger" onClick={window['hideDiv']}>Enviar datos</button>
          </div>
          
      
      </div>

      </form>
      
     
    </div>
  );  
  }
  
  
  export default VocForm;