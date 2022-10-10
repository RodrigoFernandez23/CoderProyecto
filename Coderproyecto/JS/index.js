/*
Proyecto entregable CoderHouse.
Canchas de Futbol
*/
   
    let canchasdisp;
    let reserva;
    let reservacancha;
    let reservacant;
    let respuesta;



function pedirDatos(){
    alert('Bienvenido al gestor de turnos para FUTBOL TOTAL') 
    let seleccion=Number(prompt('Que desea hacer a continuacion?\n 1-Ver canchas disponibles \n 2-Reservar \n 3-Modificar/Eliminar reserva \n 4- Salir'));

    switch (seleccion){
        case 1:
            canchasdisp= alert('Nuestras canchas disponibles hasta la fecha son:\n1-Camp Nou \n 2- Santiago Bernabeu \n 3- Wanda Metropolitano');
        break;
        case 2:
            reserva= prompt('Nombre del Usuario que reseva:')
            reservacancha=prompt('Elija cancha para su reseva:')
            if(reservacancha!='Camp Nou' && reservacancha!='Santiago Bernabeu' && reservacancha!='Wanda Metropolitano'){
                alert('esa no es una cancha valida!')
            }

            reservacant=Number(prompt('Cantidad de jugadores a inscribirse:'))
            alert(`Perfecto ${reserva}, tu reserva de la cancha ${reservacancha} para ${reservacant} jugadores esta guardada`)
            break;

        case 3:
            respuesta=prompt(`Desea eliminar la reserva ? (Si/No)`)
            if(respuesta=='Si'){
                alert('Reserva Eliminada')
            }
            else{
                alert('La reserva no fue eliminada')
            }
            break;

        case 4:
            alert('Gracias por elegirnos')
            // break;


        default:
            alert('Ingreso un dato invalido, Reintentelo.')


    }
    
        
    


 }




 pedirDatos()
 

function canchas(Nombre, Disponibilidad, Capacidad, Horarios_Disp,precio){
    this.Nombre = Nombre;
    this.Disponibilidad = Disponibilidad;
    this.Capacidad = Capacidad;
    this.Horarios_Disp = Horarios_Disp;
    this.precio= precio 
}

const camp_Nou = new canchas('Camp Nou',true,22,'15.30hs, 19.00hs, 22.30hs,', 3000);
const santiagoBernabeu = new canchas('Santiago Bernabeu', true,11,'11.00hs, 14.00hs',1500);
const wandaMetropolitano = new canchas('Wanda Metropolitano', false,22, 'No hay horarios disponibles',3000);



function inscripcion(nombreInscripto, mail, cancha,cantJug){
    this.nombreInscripto = nombreInscripto;
    this.mail = mail;
    this.cancha= cancha;
    this.cantJug= cantJug;
}

const creacionReserva = ()=>{
    let registroNomb=prompt('Nombre del Usuario que reseva:');
    let registroMail=prompt('Ingrese una direccion de Mail de contacto:');
    let registroJug=Number(prompt('Inserte cantidad de jugadores:'));
    let jugCancha=Number(prompt('Inserte numero de cancha a jugar:'));

const reserva = new inscripcion(registroNomb,registroMail,registroJug,jugCancha);
    
}