mssql = require("mssql")
config = {
    user:"sa",
    password: "MY-secret-pw-11",
    database: "master",
    server: "localhost",
    pool:{
        min: 0,
        max: 10,
        idleTimeoutMillis: 3000
    },
    options:{
        encrypt:true,
        trustServerCertificate: true
        
    }
}

async function query(sql){
    try{
        await mssql.connect(config)
        const result = await mssql.query(sql)
        return result
    }catch(error){
        return{error}
    }
}

query("select TOP 2 * from customers;").then(res =>{
    console.log(res);
}).catch(e =>{
    console.log(e);
})