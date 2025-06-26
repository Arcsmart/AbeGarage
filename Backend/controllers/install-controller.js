// import the install seervices to handle communiction with the database 
const installService = require('../services/install-service');
//create a function to handle the install requst 

async function install(req,res,next){
    //call the install service to create the database tables
    const installMessage = await  installService.install()
    //check if install was successful or not and send the appropriate response to the client
    if(installMessage.status==200){
       res.status(200).json({
          message:installMessage
       })   
    } else{
       res.status(500).json({
          message:installMessage
       })   
    }   
}
module.exports={install}