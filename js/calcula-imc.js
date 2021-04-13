//-----------FAZ O CALCULO IMC-------------

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
var pacientes = document.querySelectorAll(".paciente");

//loop faz conta imc
for(var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];
    
    //peso
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent; 
    //altura
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    //imc
    var tdImc = paciente.querySelector(".info-imc");

    //verefica se é F or V
    var vereficaPeso = validaPeso(peso);
    var vereficaAltura = validaAltura(altura);

    if (!vereficaPeso){
        console.log("Peso errado");
        vereficaPeso = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!vereficaAltura) {
        console.log("Altura errada");
        vereficaAltura = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    if (vereficaPeso == true && vereficaAltura == true) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

}

function validaPeso(peso){
    if(peso > 0 && peso <500){
        return true;
    }
    else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2); //basciamente o que colocar no >>>>>return<<<<< é o que vai retornar quanod chamar a função
}

