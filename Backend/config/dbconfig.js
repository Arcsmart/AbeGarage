const mysql = require("mysql2/promise")

const dbconfig = {
  connectionLimit: 10,
  password: process.env.DB_pass,
  user: process.env.DB_user,
  host: process.env.DB_host,
  database: process.env.DB_name,
};

const pool = mysql.createPool(dbconfig)

async function query(sql,params){
   const[rows,fields] = await pool.execute(sql,params);
   return rows    
}

module.exports={query}
