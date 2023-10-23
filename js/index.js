// TAREA PARA EL LUNES: hacer con condiciones y en un bucle de tres veces a ver quien gana, es el mejor de 3

// valorIngresado = ....... ;
        // generar variable resultado
        // pedir mediante prompt que el usuario ingrese piedra, papel o tijera y guardar en valorElegido
        // hacer una logica de validacion de las variables valorElegido contra valorMaquina
        // si la variable seleccionada es igual a la variable del usuario, entonces empate, 
        // si la variable del usuario es piedra y la del programa es tijera, gana usuario
        // si la variable del usuario es papel y la del programa es piedra, gana usuario
        // si la variable del usuario es tijera y la del programa es papel, gana usuario
        // si la variable del usuario es tijera y la del programa es piedra, gana programa
        // si la variable del usuario es piedra y la del programa es papel, gana programa
        // si la variable del usuario es papel y la del programa es tijera, gana programa
        
        const piedra="piedra";
        const papel="papel";
        const tijera="tijera";
        
        
        const valorPrograma = "piedra";
        

        let resultadoUsuario=0,
        resultadoPrograma=0;


        //SETEO 3 JUEGOS (for) Y GANA EL MEJOR DE 3 JUEGOS O EMPATAN

        for (let i = 0; i < 3; i++) {
            let valorIngresado = prompt("Ingrese Piedra, papel o tijera");
 
            // validaciones del valor ingresado
            while ((valorIngresado.toLowerCase()!==piedra) && (valorIngresado.toLowerCase()!==papel) && (valorIngresado.toLowerCase()!==tijera)) {
                alert("El valor ingresado no corresponde");
                 valorIngresado = prompt("El valor ingresado no corresponde. Ingrese Piedra, papel o tijera");
            }
           //.....................................................



            /* 
            if (valorIngresado.toLowerCase()===valorPrograma) {
                resultadoUsuario++;
                resultadoPrograma++;
            }

 */
          if ((valorIngresado.toLowerCase()==papel && valorPrograma==piedra) || (valorIngresado.toLowerCase()==papel && valorPrograma==piedra) || (valorIngresado.toLowerCase()==tijera && valorPrograma==papel)) {
            resultadoUsuario++;
          }

          if ((valorIngresado.toLowerCase()==tijera && valorPrograma==piedra) || (valorIngresado.toLowerCase()==piedra && valorPrograma==papel) ||  (valorIngresado.toLowerCase()==papel && valorPrograma==tijera)) {
            resultadoPrograma++;
          }
          alert("RESULTADO PARCIAL- Usuario: " + resultadoUsuario + "Programa: " + resultadoPrograma);
          

        }
        

        if (resultadoUsuario > resultadoPrograma) {
            document.write("<div>Ganador: Usuario</div>");
        }else if(resultadoUsuario == resultadoPrograma){
            document.write("<div>Resultado: Empate</div>");
        }else{
            document.write("<div>Ganador: Programa</div>");
        }
       



