
// Import the query function from the db.config.js file 
const conn = require('../config/dbconfig')
// import bcrypt to hash customers password
const bcrypt = require('bcrypt')
// A function to check if customers exists in the database 
async function checkIfCustmersExists(email){
    const query = "SELECT * FROM customer_identifier WHERE customer_email=?"; 
    const rows = await conn.query(query,[email])  
    console.log(rows) 
    if(rows.length > 0){
          return true
    } 
     return false
}
// A function to create a new customer
async function createCustomer(customer){
     let createCustomer = {}
     try{
      const rawPassword = customer.customer_hash || "defaultPassword123";
     const salt = await bcrypt.genSalt(10)  
     const hashedPassword = await bcrypt.hash(rawPassword, salt); 
     // Insert the email in to the customer_identifier
     const query =
       "INSERT INTO customer_identifier (customer_email,customer_phone_number,customer_hash) VALUES(?,?,?)";
       const rows = await conn.query(query, [
         customer.customer_email,
         customer.customer_phone_number,
         hashedPassword,
       ]); 
       console.log(rows)
       if(rows.affectedRows !==1){
          return false
       }
       // Get customer id from inserted 
       const customer_id = rows.insertId
       // Insert the remaining data in to the customer_info
        const activeStatus = customer.active_customer_status ?? 1;
       const query1 =
         "INSERT INTO customer_info(customer_id,customer_first_name,customer_last_name,active_customer_status) VALUES(?,?,?,?)";
         const row1 = await conn.query(query1, [
           customer_id,
           customer.customer_first_name,
           customer.customer_last_name,
           activeStatus,
         ]);
                //  if (row1.affectedRows !== 1) {
                //    return false;
                //  }

         // constraction to the object to return
         createCustomer={
          customer_id:customer_id
        }
     }catch(err){
          console.log(err)
     }
     // Return the employee object
     return createCustomer;
}

async function getCustomerByEmail(customer_email){
      try {
         const query = `SELECT * FROM customer_identifier INNER JOIN customer_info ON customer_identifier.customer_id = customer_info.customer_id  WHERE customer_identifier.customer_email=? `;
         const rows =await conn.query(query,[customer_email])


      } catch (error) {
          console.log(error)
      }    
}

async function getAllCustomer(){
  const query =
    "SELECT * FROM customer_identifier INNER JOIN customer_info ON customer_identifier.customer_id = customer_info.customer_id ORDER BY customer_identifier.customer_id DESC limit 10";
    const rows = await conn.query(query)
    // console.log(rows)
    return rows
}
// Export the function for use in controller 
module.exports={
checkIfCustmersExists,
createCustomer,
getCustomerByEmail,
getAllCustomer
}


// -- Customers tables  
// CREATE TABLE IF NOT EXISTS `customer_identifier` (
//   `customer_id` int(11) NOT NULL AUTO_INCREMENT,
//   `customer_email` varchar(255) NOT NULL,
//   `customer_phone_number` varchar(255) NOT NULL,
//   `customer_added_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
//   `customer_hash` varchar(255) NOT NULL,
//   PRIMARY KEY (customer_id),
//   UNIQUE (customer_email)
// ) ENGINE=InnoDB;

// CREATE TABLE IF NOT EXISTS `customer_info` (
//   `customer_info_id` int(11) NOT NULL AUTO_INCREMENT,
//   `customer_id` int(11) NOT NULL, 
//   `customer_first_name` varchar(255) NOT NULL,
//   `customer_last_name` varchar(255) NOT NULL,
//   `active_customer_status` int(11) NOT NULL,
//   PRIMARY KEY (customer_info_id),
//   FOREIGN KEY (customer_id) REFERENCES customer_identifier(customer_id)
// ) ENGINE=InnoDB;











//  Add New Customer
//     ----------------- 
//       request
//       POST /api/employee HTTP/1.1
//       Content-Type: application/json 
//       Host: localhost:8080 
//       {
//         "customer_email": "test@test.com",
//         "customer_phone_number": "555-555-5555",
//         "customer_first_name": "Test",
//         "customer_last_name": "Test",
//         "customer_hash": "khsdgfkujhkjnfdfg7763hdff",
//         "active_customer_status": 1,
//         "customer_added_date": "2016-11-28T14:10:11.338Z"
//       }

//       response
//       HTTP/1.1 200 OK
//       Content-Type: application/json
//       {
//         "success":"true"
//       }