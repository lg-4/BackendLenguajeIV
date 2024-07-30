
import { Router } from "express"
import { nanoid } from "nanoid"

import authByEmailPwd from './auth.js'

const sessions=[]
const authSessionRouter= Router()

authSessionRouter.post("/login", (req, res)=>{
    const {cor_usuario, pas_usuario}=req.body
    
    if(!cor_usuario || !pas_usuario){
        return res.sendStatus(400)
    }

    try {
         authByEmailPwd(cor_usuario, pas_usuario)

        const sessionId= nanoid()
        sessions.push({sessionId})

        res.cookie('sesionId',sessionId,{
            httpOnly: true
        })
        return res.send(`Usuario ${user.cor_usuario} autenticado`)
    
    } catch (error) {
        return res.sendStatus(401)
    }
})

authSessionRouter.get("/profile", (req, res)=>{
    console.log(req.cookies)
     return res.send
})
export {authSessionRouter}