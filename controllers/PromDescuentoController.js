import { mysqlConnection } from "../DATABASE/conexion.js"

const getPromDescuentos= async (_, res) => {
    mysqlConnection.query('CALL SelectPromDescuentos()', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}


const postPromDescuentos = async (req, res) => {
    const params = [ 
        req.body.FechaPromocion,
        req.body.Promocion,
        req.body.Descuento,
        req.body.Disponibilidad,
        req.body.TipoVehiculo,
        req.body.Marca
    ];

    const query = 'CALL InsertPromDescuentos(?, ?, ?, ?, ?, ?)';
    mysqlConnection.query(query, params, (err, result) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).json({ msg: 'Error al insertar Promocion' });
        } else {
            res.json({
                result,
                msg: 'Promocion insertada correctamente'
            });
        }
    });
};



export {getPromDescuentos, postPromDescuentos}