import Express from 'express'
import { apiVehiculos } from './Routes/CompararVehiculosRoutes.js'
const app = Express()

app.use(Express.json())

app.use('/Comparar-vehiculos', apiVehiculos)


app.listen(3000)
console.log('puerto 3000 activo')