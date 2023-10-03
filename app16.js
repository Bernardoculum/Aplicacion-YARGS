
const colors = require('colors')
const { crearArchivo } = require('./helpers/multiplicar5')
const argv = require('./config/yargs3')


console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(colors.red.bold(nombreArchivo +  'Creado')))
    
    .catch(err => console.log(err))