import Express from 'express'
const apiVehiculos = Express();

import { getVehiculos } from '../controllers/CompararVehiculoController.js'

apiVehiculos.get('', getVehiculos)

export {apiVehiculos}
