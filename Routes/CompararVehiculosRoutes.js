import Express from 'express'
const apiVehiculos = Express();

import { getVehiculos, postVehiculos, getVehiculo} from '../controllers/CompararVehiculoController.js'

apiVehiculos.get('', getVehiculos)
apiVehiculos.get('/:search', getVehiculo)
apiVehiculos.post('', postVehiculos)

export {apiVehiculos}
