//USING Javascript and Node js with remotemysql.com as host for the database
//Thomas Henry 16351326 Assignment 04
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "gnkfLSJ8pK",
  password: "jvLqsMw0R3",
  database: "gnkfLSJ8pK"
});
con.connect();
console.log("connected");
//--------------------------DISPLAY TABLES-------------------------------
showAllTables()
;/*
//---------------------------UNCOMMENT EACH FUNCTION TO PERFORM QUERY--------
showCustomer();
showAddress();
showCustomerAddress();
//---------------------------INSERT INTO TABLES-------------------------
//insertCustomer("Title", "FirstName", "LastName", "yyyy-mm-dd", "EmailAddress", "MobileNumber");
insertCustomer("Ms", "Ellen", "Jones", "1986-08-24", "ellenj@outlook.ie", "083346717");
//insertAddress("add1", "add2", "town", "cityorcounty", "eircode");
insertAddress("25 Beach", "Redwood", "Callybeagh", "Wexford", "W43PG01");
//insertCustomerAddress("home", "ship");
insertCustomerAddress( "0", "1");
//-------------------------UPDATE TABLES------------------------------
//updateCustomer("Column","Operator","New Variable","Column to change","Operator","Old Variable");
updateCustomer("FirstName","=","Gregory","CustomerID",">","21");
//updateAddress("Column","Operator","New Variable","Column to change","Operator","Old Variable");
updateAddress("Eircode","=","AA11BB22","AddressID","=","2");
//updateCustomerAddress("Column","Operator","New Variable","Column to change","Operator","Old Variable");
updateAddress("Shipping","=","0","AddressID","=","2");
//-------------------------DELETE TABLE ENTRIES--------------------------
//deleteCustomer("Column","Operator","Condition");
deleteCustomer("CustomerID",">","1");
//deleteAddress("Column","Operator","Condition");
deleteAddress("AddressID",">","1");
//deleteCustomerAddress("Column","Operator","Condition");
deleteCustomerAddress("Home","=","0");
//-----------------------SHOW TABLES WITH CONDITIONS--------------------
//showCustomerCondition("Column", "Operator" ,"Condition");
showCustomerCondition("FirstName", "=" ,"Gregory");
//showAddressCondition("Column", "Operator" ,"Condition");
showAddressCondition("Town", "LIKE" ,"Dun%");*/
//---------------------------------------------------------------------------
con.end();

//------------------------------INSERT INTO DATABASE---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function insertCustomer(custTitle, custFname, custLname, custDoB, custEmail, custMobile){
  var sql = "INSERT INTO Customer (CustomerID, TITLE, FirstName ,LastName, DateOfBirth,  EmailAddress, MobileNumber) VALUES (NULL, '"+custTitle+"','"+custFname+"','"+custLname+"','"+custDoB+"','"+custEmail+"','"+custMobile+"');";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted into Customer");
    });
}
function insertAddress( add1, add2, town, cityorcounty, eircode){
  var sql = "INSERT INTO Address (AddressID, 	AddressLine1, 	AddressLine2 ,Town, CityOrCounty,  EIRCODE) VALUES (NULL, '"+add1+"','"+add2+"','"+town+"','"+cityorcounty+"','"+eircode+"');";
  con.query(sql, function (err, result) {
  if (err) throw err;
  lastAddId = result.insertId;
  console.log("1 record inserted into Address");
  });
}
function insertCustomerAddress(home, ship){
    var sql = "INSERT INTO CustomerAddress ( CustomerID, AddressID, Home, Shipping) VALUES ((SELECT CustomerID FROM Customer ORDER BY CustomerID DESC LIMIT 1),(SELECT AddressID FROM Address ORDER BY AddressID DESC LIMIT 1),  '"+home+"', '"+ship+"'); ";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted into CustomerAddress");
    });
}

//-----------------------------Display Contents (All)----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function showAllTables(){
  con.query("SELECT FirstName,LastName,Eircode FROM Customer c JOIN CustomerAddress ca ON c.CustomerID = ca.CustomerID JOIN Address a ON ca.AddressID = a.AddressID WHERE ca.Shipping = '1';", function (err, result, fields) {
    if (err) throw err;
    var test = result;
    var length = Object.keys(result).length;
    console.log(length);
    for (var i = 0; i < length; i++)
    {
    console.log("Name: " + result[i].FirstName + " " + result[i].LastName + " - Eircode: " +result[i].Eircode);
    }
  });
}
function showCustomer(){
  con.query("SELECT CustomerID,FirstName,LastName,DateOfBirth FROM Customer", function (err, result, fields) {
    if (err) throw err;
    var test = result;
    var length = Object.keys(result).length;
    console.log(length);
    for (var i = 0; i < length; i++)
    {
    console.log("Customer ID: " + result[i].CustomerID + " - Customer Name: " + result[i].FirstName + " " + result[i].LastName + " - Date of Birth: " +result[i].DateOfBirth);
    }
  });
}
function showAddress(){
  con.query("SELECT AddressID,Eircode FROM Address", function (err, result, fields) {
    if (err) throw err;
    var test = result;
    var length = Object.keys(result).length;
    console.log(length);
    for (var i = 0; i < length; i++)
    {
    console.log("Address ID: " + result[i].AddressID + " - Address Eircode: " + result[i].Eircode);
    }
  });
}
function showCustomerAddress(){
  con.query("SELECT * FROM CustomerAddress", function (err, result, fields) {
    if (err) throw err;
    var test = result;
    var length = Object.keys(result).length;
    console.log(length);
    for (var i = 0; i < length; i++)
    {
    console.log("Customer ID: " + result[i].CustomerID +" - Address ID: " + result[i].AddressID + " - Home Address: " + result[i].Home + " - Shipping Address: " + result[i].Shipping + " - Date: " + result[i].CreateDateTime);
    }
  });
}
//----------------------------------------------------Show Contents (With Conditions)-----------------------------------------------------------------------------------------------------------
function showCustomerCondition(col, operator ,condition){
  console.log("SELECT CustomerID,"+col+" FROM Customer WHERE "+col+" "+operator+ " '"+condition+"';");
    con.query("SELECT CustomerID,"+col+" FROM Customer WHERE "+col+" "+operator+ " '"+condition+"';" , function (err, result, fields) {
    if (err) throw err;
    var test = result;
    var length = Object.keys(result).length;
    console.log(length);
    for (var i = 0; i < length; i++)
    {
    console.log("Customer ID: " + result[i].CustomerID + " - "+col+": " + result[i].col);
    }
  });
}
function showAddressCondition(col, operator ,condition){
    con.query("SELECT AddressID,"+col+" FROM Address WHERE  "+col+" "+operator+ " '"+condition+"';", function (err, result, fields) {
    if (err) throw err;
    var test = result;
    var length = Object.keys(result).length;
    console.log(length);
    for (var i = 0; i < length; i++)
    {
    console.log("Address ID: " + result[i].AddressID + " - "+col+": " + result[i].col);
    }
  });
}
//---------------------------------------------------------Update-------------------------------------------------------------------------------------------------------------------
function updateCustomer(col1,operator1,con1,col2,operator2,con2){
  console.log("UPDATE Customer SET "+col1+" "+operator1+" '"+con1+"' WHERE "+col2+" "+operator2+" '"+con2+"';");
  var sql = "UPDATE Customer SET "+col1+" "+operator1+" '"+con1+"' WHERE "+col2+" "+operator2+" '"+con2+"';";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
}
function updateAddress(col1,operator1,con1,col2,operator2,con2){
console.log("UPDATE Address SET "+col1+" "+operator1+" '"+con1+"' WHERE "+col2+" "+operator2+" '"+con2+"';");
  var sql = "UPDATE Address SET "+col1+" "+operator1+" '"+con1+"' WHERE "+col2+" "+operator2+" '"+con2+"';";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
}
function updateCustomerAddress(col1,operator1,con1,col2,operator2,con2){
console.log("UPDATE CustomerAddress SET "+col1+" "+operator1+" '"+con1+"' WHERE "+col2+" "+operator2+" '"+con2+"';");
  var sql = "UPDATE CustomerAddress SET "+col1+" "+operator1+" '"+con1+"' WHERE "+col2+" "+operator2+" '"+con2+"';";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
}
//------------------------------------------------------------Delete----------------------------------------------------------------------------------------------------
function deleteCustomer(col,operator,cond){
  var sql = "DELETE FROM Customer WHERE "+col+" "+operator+" '"+cond+"'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
}
function deleteAddress(col,operator,cond){
  var sql = "DELETE FROM Address WHERE "+col+" "+operator+" '"+cond+"'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
}
function deleteCustomerAddress(col,operator,cond){
  var sql = "DELETE FROM CustomerAddress WHERE "+col+" "+operator+" '"+cond+"'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
}
