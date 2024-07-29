
import { mysqlConnection } from "../DATABASE/conexion.js"

const authByEmailPwd= async() =>{
    const { cor_usuario, pas_usuario }= req.body

    mysqlConnection.query (await 'Select * From Usuarios Where cor_usuario= ? AND pas_usuario= ?', (err, rows, fields) => {
        console.log( rows[0])
        if(!cor_usuario || !pas_usuario) return resizeBy.send(400)
            
        if (user !== rows[0]) return resizeBy.send(401)
            
        if(password !== rows[0])return resizeBy.send(401)
    });
}

export default{authByEmailPwd}