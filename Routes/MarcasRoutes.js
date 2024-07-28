import Express from 'express'
import {getMarcas, postMarcas} from '../controllers/MarcasController.js'

const apiMarcas = Express();

apiMarcas.get('', getMarcas)
apiMarcas.post('', postMarcas)

export {apiMarcas} 