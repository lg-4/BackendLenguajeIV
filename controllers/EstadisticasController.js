import { mysqlConnection } from "../DATABASE/conexion.js"

const getEstadisticas= async (_, res) => {
    mysqlConnection.query('CALL SelectEstadisticas()', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}


export{getEstadisticas}
