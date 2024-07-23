import Express from 'express'
const apiVehiculos = Express();

import { getVehiculos, postVehiculos } from '../controllers/CompararVehiculoController.js'

apiVehiculos.get('', getVehiculos)
apiVehiculos.post('', postVehiculos)

export {apiVehiculos}
