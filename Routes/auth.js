
import { Router } from "express";
import { mysqlConnection } from "../DATABASE/conexion.js";

const authRouter = Router();

authRouter.post("/autenticado", (req, res) => {
    try{
        const { cor_usuario, pas_usuario } = req.body;

        if (!cor_usuario || !pas_usuario) {
            return res.status(400).send("Faltan datos");
        }

        const query = "SELECT * FROM USUARIOS WHERE cor_usuario = ? AND pas_usuario = ?";
        mysqlConnection.query(query, [cor_usuario, pas_usuario], (err, results) => {
        
            if (err) {
                return res.status(500).send("Error en el servidor");
            }

            if (results.length > 0) {
                res.status(200).send(`Usuario ${cor_usuario} autenticado`);
            } else {
                res.status(401).send(`Usuario ${cor_usuario} no autenticado`);
            }
        })

    }catch(e){
       return res.status(400).send(e)
    }
    
    
    });

export {authRouter};