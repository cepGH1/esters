/* 
 * CEP November 2021
 * 
 * 
 */

function test(){
    
 document.getElementById("tester").innerHTML = "hello world";
 }
 
 var oateIdentity ="1";
 var thylIdentity ="1";
 
 var  genPath = "<img src='./images/";
 var  endPath =".jpg' height='200' width='300'>";
 
 
 function setOateIdentity(myIdentity){
     oateIdentity = myIdentity;
    
     var myPath = genPath + oateIdentity + thylIdentity + endPath ;
     document.getElementById("ester").innerHTML = myPath;
 }
 
 function setThylIdentity(myThyl){
     thylIdentity = myThyl;   
    
     var myPath = genPath + oateIdentity + thylIdentity  + endPath ;
     document.getElementById("ester").innerHTML = myPath;
 }
 
// function makeAddress(myOateIdentity, myThylIdentity){
//     
//     genpath = "../../images/esters/numberedEsters/";
//     var myPath = genPath + thylIdentity + OateIdentity ;
//     document.getElementById("ester").innerHTML = myPath;
// }
 



