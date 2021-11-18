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

 var ates = ["methanoate", "ethanoate", "propanoate", "butanoate"];
 var yls = ["methyl", "ethyl", "propyl", "butyl"];
 
 var  genPath = "<img src='./images/";
 var  endPath =".jpg' height='300' width='450'>";

 
 
 function setOateIdentity(myIdentity){
     oateIdentity = myIdentity;
    
     var myPath = genPath + oateIdentity + thylIdentity + endPath ;
     document.getElementById("ester").innerHTML = myPath;
     showEsterName();
 }
 
 function setThylIdentity(myThyl){
     thylIdentity = myThyl;   
    
     var myPath = genPath + oateIdentity + thylIdentity  + endPath ;
     document.getElementById("ester").innerHTML = myPath;

     showEsterName();
 }
 
 function showEsterName(){
     var thylNum = Number(thylIdentity) -1;
     var ateNum = Number(oateIdentity) -1;
     var ester = yls[thylNum] + ates[ateNum];
      document.getElementById("esterName").innerHTML = ester;
     

 }
 
// function makeAddress(myOateIdentity, myThylIdentity){
//     
//     genpath = "../../images/esters/numberedEsters/";
//     var myPath = genPath + thylIdentity + OateIdentity ;
//     document.getElementById("ester").innerHTML = myPath;
// }
 



