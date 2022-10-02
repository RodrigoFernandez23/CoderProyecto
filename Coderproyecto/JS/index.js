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
            alert('hasta pronto!')


    }
    
        
    


 }




 pedirDatos()
