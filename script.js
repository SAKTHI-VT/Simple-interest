function calculate()
{
    pr = document.getElementById("pr").value;
    yr = document.getElementById("yr").value;
    ri = document.getElementById("ri").value;
    result = document.getElementById("result");

    result.innerHTML = "The total interest is :"  + (pr*yr*ri/100);
}