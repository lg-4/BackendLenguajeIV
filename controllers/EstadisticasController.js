import { mysqlConnection } from "../DATABASE/conexion.js"


//-------------------------------------ESTADISTICAS-----------------------------------------
const getEstadisticas= async (_, res) => {
    mysqlConnection.query('CALL SelectEstadisticas()', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}
    

const postEstadisticas = async (req, res) => {
    const params = [ //CALL InsertEstadisticas(3, 'BUENO', '7', '2024-07-08');
        req.body.Modelo,
        req.body.NombreEstadistica,
        req.body.Valor,
        req.body.Fecha,
    ];

    const query = 'CALL InsertEstadisticas(?, ?, ?, ?)';
    mysqlConnection.query(query, params, (err, result) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).json({ msg: 'Error al insertar Estadistica' });
        } else {
            res.json({
                result,
                msg: 'Estadistica insertada correctamente'
            });
        }
    });
};
//-----------------------------------------------------------------------------------------

//-------------------------------------HISTORIAL-----------------------------------------
const getEstadisticas2= async (_, res) => {
    mysqlConnection.query('CALL SelectEstadisticas2()', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}
//------------------------------------------------------------------------------------------

//-------------------------------------MANTENIMIENTOS---------------------------------------
const getMantenimientos= async (_, res) => {
    mysqlConnection.query('CALL SelectMantenimientos()', (err, rows, fields) => {
        if (!err) {
            res.status(200).json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const postMantenimientos = async (req, res) => {
    const params = [ 
        req.body.Modelo,
        req.body.TipoMantenimiento,
        req.body.Descripcion,
        req.body.Fecha,
    ];

    const query = 'CALL InsertMantenimientos(?, ?, ?, ?)';
    mysqlConnection.query(query, params, (err, result) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).json({ msg: 'Error al insertar Estadistica' });
        } else {
            res.json({
                result,
                msg: 'Estadistica insertada correctamente'
            });
        }
    });
};





export{getEstadisticas, postEstadisticas, getEstadisticas2, getMantenimientos, postMantenimientos}
