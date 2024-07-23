import Express from 'express'
const apiEstadisticas = Express();

import { getEstadisticas, postEstadisticas  } from '../controllers/EstadisticasController.js'

apiEstadisticas.get('', getEstadisticas)
apiEstadisticas.post('', postEstadisticas)

export {apiEstadisticas}