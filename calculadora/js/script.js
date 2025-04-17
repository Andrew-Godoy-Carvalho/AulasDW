/* Calculadora com IMPUTs */
var num1 = document.getElementById ('num1');
var num2 = document.getElementById ('num2');
var result2 = document.getElementById ('result2')

var btnSomar = document.getElementById('somar')
var btnSub = document.getElementById('sub')
var btnDiv = document.getElementById('div')
var btnMult = document.getElementById('mult')

btnSomar.addEventListener('click', function(){

    result2.textContent = "Resultado: " + (parseFloat(num1.value) + parseFloat(num2.value));
});

btnSub.addEventListener('click', function(){

    result2.textContent = "Resultado: " + (parseFloat(num1.value) - parseFloat(num2.value));
});

btnDiv.addEventListener('click', function(){

    result2.textContent = "Resultado: " + (parseFloat(num1.value) / parseFloat(num2.value));
});

btnMult.addEventListener('click', function(){

    result2.textContent = "Resultado: " + (parseFloat(num1.value) * parseFloat(num2.value));
});

// ----------------------------------------------------------------------------------------------------------------

var calc = document.getElementById ('calc');
var result = document.getElementById ('result');
var clean = document.getElementById ('clean');
var division = document.getElementById ('division');
var mult = document.getElementById ('mult');
var sub = document.getElementById ('sub');
var add = document.getElementById ('add');
var ig = document.getElementById ('ig');
var n9 = document.getElementById ('n9');
var n8 = document.getElementById ('n8');
var n7 = document.getElementById ('n7');
var n6 = document.getElementById ('n6');
var n5 = document.getElementById ('n5');
var n4 = document.getElementById ('n4');
var n3 = document.getElementById ('n3');
var n2 = document.getElementById ('n2');
var n1 = document.getElementById ('n1');
var n0 = document.getElementById ('n0');

var numero1 = "";
var numero2 = "";
var operacao = null;

n0.addEventListener ('click', function () {
    if (operacao == null)
    {
        numero1 = numero1 + n0.textContent;
        calculo.innerText = numero1;
    }
    else{
        numero2 = numero2 + n0.textContent;
        calculo.innerText = numero1 + "" + operacao + "" + numero2;
    }
    

});

n1.addEventListener ('click', function () {
    if (operacao == null)
    {
        numero1 = numero1 + n1.textContent;
        calculo.innerText = numero1;
    }
    else{
        numero2 = numero2 + n1.textContent;
        calculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
    

});

//---------------

division.addEventListener('click', function(){
    operacao = division.textContent;
    calc.innerText = numero1 = numero1 + " " + operacao + " " + numero2;
});

//---------------

ig.addEventListener('click', function(){
    if (operacao == "/"){

    }else if (operacao == "*"){

    }
    // Aqui vai os outros else if...
    else{
        result.innerText = "** ERRO **";
    }
})