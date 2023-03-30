const mongoose = require("mongoose");
const VocSchema = new mongoose.Schema({
    fecha:{
        type: String,
        required: true,
    },
    restaurante:{
        type: String,
        required: true,
    },
    //Creemos en TODA la gente
    Mi_GGR_me_trata_como_si_yo_tuviera_el_potencial_de_hacer_una_diferencia:{
        type: Number,
        required:true,
    },
    Mi_GGR_forma_un_equipo_diverso:{
        type: Number,
        required:true,
    },
    Confio_en_mi_GGR:{
        type: Number,
        required:true,
    },
    //Somos clientemaniacos(interno)
    El_uniforme_que_recibo_es_de_mi_talla_e_incluye_un_gafete_con_mi_nombre:{
        type: Number,
        required:true,
    },
    Tengo_un_ambiente_seguro_de_trabajo:{
        type: Number,
        required:true,
    },
    Nuestro_horario_es_colocado_en_el_restaurante_al_menos_con_una_semana_de_anticipacion:{
        type: Number,
        required:true,
    },
    Mi_GGR_asigna_turnos_de_manera_justa_y_de_acuerdo_a_nuestra_disponibilidad_acordada:{
        type: Number,
        required:true,
    },
    //Somos clientemaniacos (externo)
    Mi_equipo_se_apasiona_siempre_por_ser_clientemaniacos:{
        type: Number,
        required:true,
    },
    Mi_GGR_da_el_ejemplo_de_Clientemania_y_nos_pide_que_nos_aseguremos_de_que_los_clientes_sean_nuestra_prioridad:{
        type: Number,
        required:true,
    },
    He_sido_capacitado_completamente_sobre_como_ser_un_clientemaniaco:{
        type: Number,
        required:true,
    },
    Nuestro_restaurante_siempre_esta_organizado_y_listo_para_los_clientes_incluso_cuando_esta_lleno:{
        type: Number,
        required:true,
    },
    Si_les_preguntaran_a_nuestros_clientes_ellos_dirian_que_proveemos_un_gran_servicio:{
        type: Number,
        required:true,
    },
    //Buscamos resultados extraordinarios
    Los_miembros_de_equipo_de_mi_restaurante_siempre_llegan_puntualmente_al_trabajo:{
        type: Number,
        required:true,
    },
    Mi_GGR_nos_ha_comunicado_la_meta_extraordinario_del_restaurante_a_mi_equipo_y_a_mi:{
        type: Number,
        required:true,
    },
    Mi_GGR_me_alienta_siempre_a_tratar_y_lograr_resultados_extraordinarios_y_me_muestra_como_hacerlo:{
        type: Number,
        required:true,
    },
    Recomendaria_a_mi_restauranre_como_un_gran_lugar_para_trabajar:{
        type: Number,
        required:true,
    },
    //Construimos conocimiento
    Recibo_toda_la_capacitacion_que_necesito_para_poder_alcanzar_resultados_extraordinarios:{
        type: Number,
        required:true,
    },
    Me_dan_coaching_y_retroalimentacion_con_regularidad_sobre_como_hacer_aun_mejor_mi_trabajo:{
        type: Number,
        required:true,
    },
    Siento_que_tengo_oportunidades_para_crecer_profesionalmente_dentro_de_la_compañía:{
        type: Number,
        required:true,
    },
    //Conquistamos el exito en equipo
    Mis_compañeros_y_yo_siempre_desmostramos_un_gran_trabajo_en_equipo:{
        type: Number,
        required:true,
    },
    La_gente_de_nuestro_equipo_ayuda_aun_cuando_no_es_su_trabajo:{
        type: Number,
        required:true,
    },
    Mis_colegas_y_yo_nos_alentamos_mutuamente_a_alcanzar_resultados_extraordinarios:{
        type: Number,
        required:true,
    },
    //Reconocemos, Reconocemos, Reconocemos
    Mi_GGR_crea_una_gran_cultura_de_reconocimiento_en_mi_restaurante:{
        type: Number,
        required:true,
    },
    Puedo_dar_reconocimiento_a_cualquiera_en_mi_equipo_cada_vez_que_quiero_hacerlo:{
        type: Number,
        required:true,
    },
    Todos_se_enteran_cuando_alguien_recibe_reconocimiento_en_mi_restaurante:{
        type: Number,
        required:true,
    },
    //Comentarios
    Que_es_lo_que_aprecia_más_de_su_gerente:{
        type: String,
        required:true,
    },
    Como_podria_su_gerente_ser_aun_mas_efectivo:{
        type: String,
        required:true,
    }

});

const VocModel = mongoose.model("VOC",VocSchema)
module.exports = VocModel;