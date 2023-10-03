const fs = require('fs')


/**Ejercicio - Utilizando una Funcion async
*	Trabajando con el archivo app6.js al app12.js
*	Se utiliza el modulo.exports para dar permiso a este archivo
*	de exportar crearArchivo hasta el final de este archivo.
*/


// es una funcion no blocking
const crearArchivo = async (base = 5) => {
    try {  // try para el exito
        console.log('====================');
        console.log(' Tabla del:', base);
        console.log('====================');
        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        console.log(salida);
        fs.writeFileSync(`tabla-${base}.txt`, salida)
        return `tabla-${base}.txt`;
        
    } catch (err) {  //catch para el error
        throw err
    }

}

module.exports = {
    crearArchivo
}