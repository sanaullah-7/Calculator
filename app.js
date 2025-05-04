const result = document.getElementById("result");
function Display(number){
   
     result.value +=number;
}
function Clear(){
       result.value ="";
}
function Delete(){
       result.value = result.value.slice(0,-1);//0:startIndex: where to start (included)..-1:endIndex: where to stop (not included)
}
function Calculate()
{
    result.value = eval (result.value);//eval() takes a string of code and executes it as JavaScript.So if result.value = "2+3*5" then eval("2+3*5") returns 17.
}
//eval() javsscript ka ak function ha jo string ko math ke formula ki tarah samajhta hai aur usko solve karta hai.
function clickme()
{
       alert("Made By SanaUllah Yousafzai")
}