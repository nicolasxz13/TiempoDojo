function loadreport(city){
    alert("Cargando informe meteorológico..." + city.innerHTML);
}

function aceptcookie(){
    document.getElementById("cookiebar").style.display = "none";
}

function calctemp(typetemp){
    alert(typetemp.value);

}
function changetemp(typetemp){
    if(typetemp.value == "F"){
        var Allmax = document.querySelectorAll(".max")
        var Allmin = document.querySelectorAll(".min")
        //No encontre otra solucion mas o menos pasable y que no complicara mas css y html.
        for(var i = 0;i < Allmax.length;i++){
            Allmax[i].innerHTML = calcFahrenheit(Allmax[i].innerHTML.replace("°","")) + "°";
        }
        for(var i = 0;i < Allmax.length;i++){
            Allmin[i].innerHTML = calcFahrenheit(Allmin[i].innerHTML.replace("°","")) + "°";
        }
    }else{
        var Allmax = document.querySelectorAll(".max")
        var Allmin = document.querySelectorAll(".min")
        //No encontre otra solucion mas o menos pasable y que no complicara mas css y html.
        for(var i = 0;i < Allmax.length;i++){
            Allmax[i].innerHTML = calcCelcius(Allmax[i].innerHTML.replace("°","")) + "°";
        }
        for(var i = 0;i < Allmax.length;i++){
            Allmin[i].innerHTML = calcCelcius(Allmin[i].innerHTML.replace("°","")) + "°";
        }
    }
}

function calcFahrenheit(celcius){
    return celcius * 9/5 + 32;
}
function calcCelcius(fahrenheit){
    return (fahrenheit-32)* 5/9;
}