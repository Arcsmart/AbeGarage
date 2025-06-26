
const conn=require('../config/dbconfig')
// import the fs module to read sql
const fs =require("fs");

// wirte a function to create the database tables 
async function install(){
   // create the variable to hold the path to the sql file
   const queryfile=  __dirname + 'sql/initial-queries.sql'; 
  // console.log(queryfile)   
  // Temporary variable ,used to store all queries,the return message and the current query
  let queries=[]
  let finalMessage={}
  let templine='' 
  // Read the sql files
  const lines = await fs.readFileSync(queryfile,'utf-8').split('\n')
  // create a promese to handle the asynchronuos reading of the file and storing of the queries in the variables 
  const execute = await new Promise((resolve,reject)=>{
    // iterate over all lines 
    lines.forEach((line)=>{
if (line.trim().startsWith("--") || line.trim() ===''){
  // skip if it a comment or empty line
  return;
}
templine += line;
 if(line.trim().endsWith(',')){
   //if has semicolon at the end it the end of the query 
   // prerpre the individual query 
   const sqlQuery = templine.trim();
   // add query to the list of queries 
   queries.push(sqlQuery); 
   templine ='';     
 }
             
    })
    resolve('Queries are added to the list')      
  })
  // loop through the queries and execute them one by one asynchronously
  for(let i=0;i < queries.length;i++){
      try{
        const result =await conn.query(queries[i]);
        console.log("Table created") 
      }catch{
         finalMessage.message='not all table are created' 
      }    
  }
  //proper the final message to return to the controller
  if(!finalMessage.message){
          finalMessage.message='All tables are created'
          finalMessage.status=200;
  }else{
          finalMessage.status=500

  }
  // return finalMessage
  return finalMessage
}

module.exports={install}