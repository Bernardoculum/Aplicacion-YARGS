const fs = require('fs')
const colors = require('colors')
const path = require('path'); // Importa el módulo 'path' para manejar rutas de archivos


const crearArchivo = async (base = 5, listar = false, hasta=10) => {
  
    // const DirSalida = 'Salida';
    // const archivoDestino = path.join(DirSalida, `tabla-${base}.txt`);
    try {
        let salida = '' ;
        //Genera la tabla de lo que se envie en la base del 1 al 10 
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${'x'.green} ${i} ${'='.red} ${base * i} \n`;
        }

        // Si viene el parametro listar es decir existe entonces imprime esto en consola
        // lo que s encuentra acumulado en la varible salida
        if (listar) {
            
            console.log('===================='.green);
            console.log('   Tabla del:'.green.bold, colors.blue.bold(base));
            console.log('===================='.green);
            console.log(salida);

        }
        // fs.writeFileSync(archivoDestino, colors.stripColors(salida));
        fs.writeFileSync(`./Salida/tabla-${base}.txt`, colors.stripColors(salida));
        return colors.brightCyan(`Multiplicacion de ${base} ---> Tabla ${base}.txt `);
       

    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}