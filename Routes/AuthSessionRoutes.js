
import { Router } from "express"
import { nanoid } from "nanoid"

import authByEmailPwd from '../helpers/AuthByEmailPwd.js'

const sessions=[]
const authSessionRouter= Router()

authSessionRouter.post("/login", (req, res)=>{
    const {email, password}=req.body
    
    if(!email || !password){
        return res.sendStatus(400)
    }

    try {
         authByEmailPwd(email, password)

        const sessionId= nanoid()
        sessions.push({sessionId})

        res.cookie('sesionId',sessionId,{
            httpOnly: true
        })
        return res.send(`Usuario ${user.name} autenticado`)
    
    } catch (error) {
        return res.sendStatus(401)
    }
})

authSessionRouter.get("/profile", (req, res)=>{
    req.cookies
})
export {authSessionRouter}