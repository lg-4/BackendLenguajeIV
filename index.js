import Express from 'express'
import { apiVehiculos } from './Routes/CompararVehiculosRoutes.js'
import { apiEstadisticas } from './Routes/EstadisticasRoutes.js'
import { apiEstadisticas2 } from './Routes/EstadisticasRoutes.js'
import { apiMantenimientos } from './Routes/EstadisticasRoutes.js'
import { apiPromDescuentos } from './Routes/PromDescuentosRoutes.js'
import { apiEspecificaciones } from './Routes/EspecificacionesRoutes.js'
import { apiMarcas } from './Routes/MarcasRoutes.js'
import { apiEvaluaciones } from './Routes/EstadisticasRoutes.js'


const app = Express()

app.use(Express.json())

app.use('/Comparar-vehiculos', apiVehiculos)
app.use('/MostrarEstadisticas', apiEstadisticas)
app.use('/MostrarPrecio', apiEstadisticas2)
app.use('/MostrarMantenimientos', apiMantenimientos)
app.use('/MostrarPromociones', apiPromDescuentos)
app.use('/MostrarEspecificaciones', apiEspecificaciones)
app.use('/MostrarMarcas', apiMarcas)
app.use('/MostrarEvaluaciones', apiEvaluaciones)

app.listen(3000)
console.log('puerto 3000 activo') 