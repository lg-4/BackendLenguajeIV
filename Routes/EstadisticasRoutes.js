import Express from 'express'
import { getEstadisticas, getEstadisticas2, postEstadisticas, getMantenimientos, postMantenimientos, getEvaluaciones, postEvaluaciones, getResenias  } from '../controllers/EstadisticasController.js'

const apiEstadisticas = Express();
const apiEstadisticas2 = Express();
const apiMantenimientos = Express();
const apiEvaluaciones = Express();
const apiResenias = Express();


apiEstadisticas.get('', getEstadisticas)
apiEstadisticas.post('', postEstadisticas)
apiEstadisticas2.get('', getEstadisticas2)
apiMantenimientos.get('', getMantenimientos)
apiMantenimientos.post('', postMantenimientos)
apiEvaluaciones.get('', getEvaluaciones)
apiEvaluaciones.post('', postEvaluaciones)
apiResenias.get('', getResenias)


export {apiEstadisticas, apiEstadisticas2, apiMantenimientos, apiEvaluaciones, apiResenias} 