function display(value)
{
    var res=document.getElementById("value");
    res.innerHTML+=value;  

}
function clear_dis(){

    var clear=document.getElementById("value");
    clear.innerHTML="";
    console.log("clicked");
}
function cal()
{
    var val=document.getElementById("value");
    console.log(val.innerHTML)
    val.innerHTML=eval(val.innerHTML);
}