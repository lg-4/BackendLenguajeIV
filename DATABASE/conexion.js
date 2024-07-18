import mysql from 'mysql'


const  mysqlConnection = mysql.createConnection({

    host: '142.44.161.115',
    user: '1900Pac2Equ3',
    password: '1900Pac2Equ3#88',
    database: '1900Pac2Equ3',
    multipleStatements: false
})

mysqlConnection.connect((err)=>{
    if (!err) {
        console.log('Conexion Exitosa')
    } else {

        console.log('Error al conectar a la DB')
    }
})


export{mysqlConnection}