import Express from 'express'
const apiEstadisticas = Express();
const apiEstadisticas2 = Express();

import { getEstadisticas, getEstadisticas2, postEstadisticas  } from '../controllers/EstadisticasController.js'

apiEstadisticas.get('', getEstadisticas)
apiEstadisticas.post('', postEstadisticas)
apiEstadisticas2.get('', getEstadisticas2)

export {apiEstadisticas, apiEstadisticas2}