
import { Router } from "express"
import authByEmailPwd from '../helpers/AuthByEmailPwd.js' 

const authTokenRouter= Router()

authTokenRouter.post("/login", (req, res)=>{
    const {email, password}=req.body
    
    if(!email || !password){
        return res.sendStatus(400)
    }
    try {
        const user = authByEmailPwd(email, password)
        return res.send(`Usuario ${user.name} autenticado`)
    } catch (error) {
        return res.sendStatus(401)
    }
})

export {authTokenRouter}