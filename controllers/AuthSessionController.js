
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

import { mysqlConnection } from "../DATABASE/conexion.js"


const autenticacion= async (req, res) => {}
/*   
    //validar la bd usuario y pass
    const {username,password}=req.body
    const user= {username:username}


    const accesToken= generateAccesToken(user)

    res.header('authorization', accesToken).json({
        message: 'usuario autenticado',
        token: accesToken
    })
        
    function generateAccesToken(){
        return jwt.sign(user, process.env.SECRET, {expiresIn: '1h'})
    }
}
    
function validateToken(req, res, next){
    const accesToken =req.headers['authorization']
    if(!accesToken) res.send('Sorry Access Denied')
    
    jwt.verify(accesToken, process.env.SECRET, (err, user)=>{
        if(err) {
            res.send('Access Denied, Token Expired or Token Incorrect')
        }else{
            next()
        }

    })
}
    


*/
export {autenticacion}