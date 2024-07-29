import Express from 'express'
import {getMarcas, postMarcas, getRendimientos, postRendimientos} from '../controllers/MarcasController.js'

const apiMarcas = Express();
const apiRendimientos = Express ();

apiMarcas.get('', getMarcas)
apiMarcas.post('', postMarcas)
apiRendimientos.get('', getRendimientos)
apiRendimientos.post('', postRendimientos)


export {apiMarcas, apiRendimientos} 

