function add (x,y){

    console.log(x,y)

    let soma = x + y ;

    return soma;

}



// descomente a linha seguinte para testar sua função

//console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


function multiply (point1,point2){

   let mult =  point1;

    for(let c = 1; c < point2 ; c++)
    {
    mult = add(mult , point1);

    
}
return mult;
}


// descomente a linha seguinte para testar sua função
//console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

function power(point1,point2){

    let potencia = point1;

    for(let c = 1 ; c < point2 ; c++)
    {

        potencia = multiply(potencia,point1);


    } 
    return potencia;
}

console.log(power(3,4));

// descomente a linha seguinte para testar sua função
// console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


function factorial (ponto1){
    
    let aglomerar = ponto1;

    for(let c = ponto1-1 ; c >= 1 ; c --)
    {
    aglomerar = multiply(aglomerar , c );

    }
    return aglomerar;
}

console.log(factorial(5))


// descomente a linha seguinte para testar sua função
// console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

//// PRETENDO FAZER O BONUS NO FINAL DE SEMANA SE FOR POSSIVEL.
/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
