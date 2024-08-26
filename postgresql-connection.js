const {Pool} = require("pg");

const pool = new Pool({
    user:"postgres",
    password: "my-secret-pw",
    database: "postgres",
    host:"localhost",
    port: 5432
})


function query(sql, parameters){
    return new Promise((resolve,reject) => {
        pool.connect((err, client, done) => {
            if(err) reject(err)
            client.query(sql, parameters,(err,result) =>{
                done()
                if(err){
                    reject(err)
                }else{
                    resolve(result.rows)
                }
            })
        })
    })
}

query("select * from customers limit 2", []).then(rows =>{
    console.log(rows);
}).catch(e => {
    console.log(e);
}).finally(() => {
    console.log("Execution finished");
})