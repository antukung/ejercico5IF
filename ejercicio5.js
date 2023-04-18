let perroIngresada = prompt ("ingrese la tantidad de perros");
let gatoIngresado = prompt ("ingrese la cantidad de gatos")
let tiermpoPaseoIngresado = prompt ("tiempo del paseo en minutos");
let confirmarSiEsPerro = confirm ("si es perro dale a positivo")
let confirmarSiEsGato= confirm ("si es gato dale a positivo");
const PRECIO_DEL_PASEO_POR_TIEMPO_MINUTOS=0.001;
const PRECIO_DEL_PASEO_POR_PERRO= 0.004;
const PRECIO_DEL_PASEO_POR_GATO= 0.0068;
let confirmoElPago= confirm ("paga la cantidad requeridad");
if ((perroIngresada <= 2 || gatoIngresado<=2) && ((tiermpoPaseoIngresado>= 30) && (tiermpoPaseoIngresado<=60)&&(confirmoElPago))) {
    document.write ("<h4>es posible realizar el paseo</h4>")
    document.write ("<h4>el paseo durara "+tiermpoPaseoIngresado+ "</h4>")
    document.write("<h4> el precio del paseo es ETH"+((PRECIO_DEL_PASEO_POR_TIEMPO_MINUTOS*tiermpoPaseoIngresado)+(confirmarSiEsPerro*PRECIO_DEL_PASEO_POR_PERRO*perroIngresada)+(confirmarSiEsGato*PRECIO_DEL_PASEO_POR_GATO*gatoIngresado+ "</h4>")))
    document.write("<h4> se pudo realizar el paseo </h4>")
} else {
    alert ("no es posible realizar el paseo")
}


