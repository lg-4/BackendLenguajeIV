import { mysqlConnection } from "../DATABASE/conexion.js";
import { redisClient } from "../redis.js";
import { promisify } from 'util';


// Función para ejecutar consultas MySQL con Promesas
const queryDatabase = (query, params = []) => {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(query, params, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

const GET_ASYNC = promisify(redisClient.get).bind(redisClient)
const SET_ASYNC = promisify(redisClient.set).bind(redisClient)

const getVehiculos = async (_, res) => {
    try {

        const reply = await GET_ASYNC("vehiculos")
        if(reply){
            return res.json(JSON.parse(reply))
        }
        
        const rows = await queryDatabase('CALL SelectVehiculos()');
           
        reply = await SET_ASYNC("vehiculos", JSON.stringify(rows))
        res.status(200).json(rows);

     } catch (err) {
        res.status(500).json({ msg: 'Error al obtener vehículos', err });
    }
};

const postVehiculos = async (req, res) => {
    const params = [
        req.body.year,
        req.body.motor,
        req.body.potence,
        req.body.marc,
        req.body.model,
        req.body.typeTransmition
    ];

    const query = 'CALL InsertVehiculos(?, ?, ?, ?, ?, ?)';
    try {
        if (!redisClient.isOpen) {
            await redisClient.connect();
        }
        const result = await queryDatabase(query, params);
        res.json({
            result,
            msg: 'Vehículo insertado correctamente'
        });
    } catch (err) {
        console.error('Error al insertar el vehículo:', err)
        res.status(500).json({ msg: 'Error al insertar el vehículo' })
    }
};

export { getVehiculos, postVehiculos };
