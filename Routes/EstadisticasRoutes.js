import Express from 'express'
const apiEstadisticas = Express();

import { getEstadisticas } from '../controllers/EstadisticasController.js'

apiEstadisticas.get('', getEstadisticas)

export {apiEstadisticas}