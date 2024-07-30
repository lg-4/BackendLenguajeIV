import { Router } from "express";
import { SignJWT, jwtVerify } from "jose";
import { authRouter, handleAuth } from '../helpers/AuthByEmailPwd.js';

const authTokenRouter = Router();



authTokenRouter.post("/login", async (req, res) => {
    const { cor_usuario, pas_usuario } = req.body;

    if (!cor_usuario || !pas_usuario) {
        return res.sendStatus(400);
    }

    try {
        const { userConn } = await handleAuth(cor_usuario, pas_usuario);

        const jwtConstructor = new SignJWT({ userConn });

        const encoder = new TextEncoder();
        const jwt = await jwtConstructor
            .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
            .setIssuedAt()
            .setExpirationTime('1h')
            .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));

        return res.send(jwt);
    } catch (error) {
        return res.sendStatus(401);
    }
});

authTokenRouter.get("/profile", async(req, res) => {
    const {autorization}= req.header
    if(!autorization)return res.status(401)

    try {
        const encoder = new TextEncoder();
       const jstData = await jwtVerify(autorization, encoder.encode(process.env.JWT_PRIVATE_KEY))

    } catch (error) {
        
    }   
});

export { authTokenRouter };