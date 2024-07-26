import Express from 'express'
import { getPromDescuentos, postPromDescuentos } from '../controllers/PromDescuentoController.js'

const apiPromDescuentos= Express()

apiPromDescuentos.get('', getPromDescuentos)
apiPromDescuentos.post('', postPromDescuentos)




export {apiPromDescuentos}