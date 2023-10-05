
const colors = require('colors')
const { crearArchivo } = require('./helpers/multiplicar5')
const argv = require('./config/yargs3')


console.clear();



crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(colors.red.bold(nombreArchivo +  'Creado con Exito')))
    
    .catch(err => console.log(err))