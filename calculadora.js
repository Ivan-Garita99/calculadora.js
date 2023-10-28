// calculadora.js

const readline = require('readline'); // Proporciona una interfaz para leer la entrada del usuario desde la terminal.

const rl = readline.createInterface({ // Instancia readline.Interface llamada rl y se configura para leer
    input: process.stdin, // Entrada estándar, que es la terminal
    output: process.stdout // Salida estándar, que también es la terminal
});

function calcular() { //Esta función se encargará de solicitar al usuario una operación matemática y mostrar el resultado
    rl.question('Ingrese una operación: ', (operacion) => {
        try {
            const resultado = eval(operacion); // Se utiliza eval para evaluar la expresión ingresada.
            console.log(`Resultado: ${resultado}`); // El resultado se almacena en la variable resultado // Se muestra en la terminal utilizando console.log()
        } catch (error) {
            console.error('Operación no válida'); // Si se ingresa una operación no válida, se captura la  catch y se muestra un mensaje de error en la terminal
        }

        rl.question('¿Desea realizar otra operación? (s/n): ', (respuesta) => {
            if (respuesta.toLowerCase() === 's') {
                calcular();
            } else {
                rl.close();
            }
        });
    });
}

calcular();
