/*
*  Program: BIDdatabase.js
*  Purpose: Handles all database functions and queries
*  @author BID 
*  Created: 2014-02-18
*/

//create tables
function createTables()
{
BIDTSSdb.transaction(function (tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS Category (id INTEGER PRIMARY KEY AUTOINCREMENT, name, description)", null, sR, errorHandler);
        tx.executeSql("CREATE TABLE IF NOT EXISTS Service (id PRIMARY KEY, category_id, name, duration, price, descritption)", null, sR, errorHandler);
        tx.executeSql("CREATE TABLE IF NOT EXISTS CartItem (id INTEGER PRIMARY KEY AUTOINCREMENT, service_id)", null, sR, errorHandler);
        tx.executeSql("CREATE TABLE IF NOT EXISTS Feedback (id INTEGER PRIMARY KEY AUTOINCREMENT, service_id, date, comment)", null, sR, errorHandler);
        tx.executeSql("CREATE TABLE IF NOT EXISTS Promotion (id INTEGER PRIMARY KEY AUTOINCREMENT, name, service_id, discountRate, descritption)", null, sR, errorHandler);
        tx.executeSql("CREATE TABLE IF NOT EXISTS Tips (id INTEGER PRIMARY KEY AUTOINCREMENT, name, category_id, descritption)", null, sR, errorHandler);
       }); //end of create table
}


//success functions
function sR()
{
   //alert("action was successful");
}
