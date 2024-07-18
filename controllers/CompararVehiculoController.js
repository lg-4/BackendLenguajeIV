import { mysqlConnection } from "../DATABASE/conexion.js"

const getVehiculos= async (_, res) => {
    mysqlConnection.query('CALL SelectVehiculos()', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}


export{getVehiculos}
