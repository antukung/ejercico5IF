let mascotaIngresada = prompt ("ingrese la tantidad de mascotas");
let tiermpoPaseoIngresado = prompt ("tiempo del paseo en minutos")

if ((mascotaIngresada <= 3) && ((tiermpoPaseoIngresado>= 30) && (tiermpoPaseoIngresado<=60))) {
    document.write ("<h4>es posible realizar el paseo</h4>")
    document.write ("<h4>el paseo durara </h4>"+tiermpoPaseoIngresado)
    
} else {
    alert ("no es posible realizar el paseo")
}

