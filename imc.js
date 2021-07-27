var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var F = document.getElementById("F");
var M = document.getElementById("M");

function validadeForm()
{
    if(age.value == '' || height.value == '' || weight.value == '' || (male.checked==false && female.checked==false)){
        alert("Todos os campos são requeridos!");
        document.getElementById("submit").removeEventListener("click", calculateIMC);
    } else{
        calculateIMC();
    }
}

function calculateIMC(){
    var arrayPerson = [age.value, height.value, weight.value];
    if(male.checked){
        arrayPerson.push("Masculino");
    } else if(female.checked){
        arrayPerson.push("Feminino");
    }
}    
