import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config()

const host = process.env.HOST 
const user = process.env.USER
const password = process.env.PASS
const database = process.env.DATABASE  

const  mysqlConnection = mysql.createConnection({

    host: host,
    user: user,
    password: password+'#88',
    database: database,
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