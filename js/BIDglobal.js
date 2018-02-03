/*
*  Program: BIDglobal.js
*  Purpose: Global; document ready features
*  @author BID
*  Created: 2014-02-18
*/

var BIDTSSdb;


function errorHandler(transaction, error){
   alert("SQL error: " + error.message);
             }


$(document).ready(function(){
   
    /* We don't support MSIE or Firefox */
    if($.browser.msie || $.browser.firefox) {
       alert("This browser is not supported.");
        window.location.href = "http://google.com";
    }
   
  //open the database
    BIDTSSdb = openDatabase('BIDTSS', '1.0', 'BID TSS Database', 2 * 1024 * 1024);
    
    //create tables
    createTables();
});