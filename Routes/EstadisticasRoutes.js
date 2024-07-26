import Express from 'express'
import { getEstadisticas, getEstadisticas2, postEstadisticas, getMantenimientos, postMantenimientos  } from '../controllers/EstadisticasController.js'

const apiEstadisticas = Express();
const apiEstadisticas2 = Express();
const apiMantenimientos = Express();


apiEstadisticas.get('', getEstadisticas)
apiEstadisticas.post('', postEstadisticas)
apiEstadisticas2.get('', getEstadisticas2)
apiMantenimientos.get('', getMantenimientos)
apiMantenimientos.post('', postMantenimientos)

export {apiEstadisticas, apiEstadisticas2, apiMantenimientos} 