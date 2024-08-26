const mysql = require("mysql8");

const pool = mysql.createPool({
    host:"localhost",
    port: 3306,
    user: "root",
    database: "northwind",
    password: "my-secret-pw"
})


function query(sql){
    return new Promise((resolver, reject) =>{
        pool.query(sql,function(error, result, fields){
            if(error) reject(error)
            return resolver(result)
        })
    })
}

query("select * from Customers;").then(datos => {
    console.log(datos)
}).catch(err => {
    console.log(err)
})