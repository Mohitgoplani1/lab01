function clearscreen()
{
document.getElementById("result").value="";
}
function display(value){
document.getElementById("result").value += value;
}
function calculate(){ var p=document.getElementById("result").value; var q= eval(p)
document.getElementById("result").value=q
}
function inverse(){ var q=document.getElementById("result").value;
document.getElementById("result").value=-q;
}