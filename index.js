const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
"d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", 
"9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?","/"];

let ind = 0
let pwdlen = 10;
let pwd =''; 
let pwd2='';
let pwd1El = document.getElementById('pwd1-el');
let pwd2El = document.getElementById('pwd2-el');
let pwdlent = document.getElementById('pwd-length') 

function pwdGenerator(){
    pwdlen = pwdlent.value
    pwd='';
    pwd2='';
    for(let i=0; i< pwdlen ; i++){
        ind = Math.floor(Math.random()*characters.length);
        pwd += characters[ind]
   }
   
   for(let i=0; i< pwdlen ; i++){
        ind2 = Math.floor(Math.random()*characters.length);
        pwd2 += characters[ind2]
}
pwd2El.textContent = pwd2
pwd1El.textContent = pwd;
}