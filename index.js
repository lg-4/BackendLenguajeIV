import Express from 'express'
import cookieParser from 'cookie-parser'


import { apiVehiculos } from './Routes/CompararVehiculosRoutes.js'
import { apiEstadisticas } from './Routes/EstadisticasRoutes.js'
import { apiEstadisticas2 } from './Routes/EstadisticasRoutes.js'
import { apiMantenimientos } from './Routes/EstadisticasRoutes.js'
import { apiPromDescuentos } from './Routes/PromDescuentosRoutes.js'
import { apiEspecificaciones } from './Routes/EspecificacionesRoutes.js'
import { apiMarcas } from './Routes/MarcasRoutes.js'
import { apiEvaluaciones } from './Routes/EstadisticasRoutes.js'
import { apiResenias } from './Routes/EstadisticasRoutes.js'
import { apiRendimientos } from './Routes/MarcasRoutes.js'
import { authTokenRouter } from './Routes/AuthTokenRoutes.js'

const app = Express()

app.use(Express.json())
app.use(cookieParser())

app.use('/comparar-vehiculos', apiVehiculos)
app.use('/Mmostrar-estadisticas', apiEstadisticas)
app.use('/mostrar-precio', apiEstadisticas2)
app.use('/mostrar-mantenimientos', apiMantenimientos)
app.use('/mostrar-promociones', apiPromDescuentos)
app.use('/mostrar-especificaciones', apiEspecificaciones)
app.use('/mostrar-marcas', apiMarcas)
app.use('/mostrar-evaluaciones', apiEvaluaciones)
app.use('/mostrar-resenias', apiResenias)
app.use('/mostrar-rendimientos', apiRendimientos)
app.use('/auth-token', authTokenRouter)



app.listen(3000)
console.log('puerto 3000 activo') 

