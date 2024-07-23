import Express from 'express'
import { apiVehiculos } from './Routes/CompararVehiculosRoutes.js'
import { apiEstadisticas } from './Routes/EstadisticasRoutes.js'
const app = Express()

app.use(Express.json())

app.use('/Comparar-vehiculos', apiVehiculos)
app.use('/MostrarEstadisticas', apiEstadisticas)

app.listen(3000)
console.log('puerto 3000 activo')