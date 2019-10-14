function SolveEx1()
{
    var d = document.getElementById("Numbers100");
    d.innerHTML = d.innerHTML + "<br>123";
 
 var i;

 for(i=0;i<=100;i=i+1)
 {
    d.innerHTML = d.innerHTML +"<br>"+i.toString();
 }
}

function SolveEx2()
{
    var d = document.getElementById("SumNumbers100");
    var sum = 0;

    for(i=0;i<=10;i=i+1)
    {
        sum = sum + i;
        d.innerHTML = d.innerHTML +"<br>"+sum.toString();
    }  
    
}