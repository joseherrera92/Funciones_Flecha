//--------------- Funcion numero 1 -----------------

const suma = [10, 22, 40, 20];

const initialValue = 0;
const resul_suma = suma.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 
    initialValue
);

console.log(`La suma de mi numero favorito es :  ${resul_suma}`);

//--------------- Funcion numero 2 -----------------

tiposdefrutas = () => {
    const frutas = ["manzanas", "peras", "fresas", "bananas", "kiwis"];
    frutas.shift(); //me borra el primer elemento del arreglo
    console.log(frutas);
}

const frutass = (recibecall) => {
   const fruticas = recibecall();
   console.log(fruticas);
}

frutass(tiposdefrutas);

//--------------- Funcion numero 3 -----------------

const numeros = [10,20,30,40,50,60,70,80,90,100];
const n_menor = numeros.filter(numeros => numeros <= 50);
console.log(`Los numeros menores o iguales a 50 son: ${n_menor}`);

numeros.push("dimelo jara",25,34);
console.log(numeros);

const mas92 = numeros.map(numero => numero+92);
console.log(mas92);

//--------------- Funcion numero 4 -----------------

const doble = numeros.map(function(x) {
    return x * 2;
 });

console.log(doble);

//--------------- Funcion numero 5 -----------------

marcasdemotos = () =>{
    const marcamotos = ["boxerct", "pulsarns", "bwsX", "szr", "Dominar400"];
    marcamotos.pop(); //me borra el ultimo elemento del array
    return marcamotos;
}

const moto = (recibe) =>{
   const motoo = recibe();
   console.log(motoo);
}

moto(marcasdemotos);


//--------------- Funcion numero 6 -----------------

const multiplicar = (n1, n2) => (n1,n2);

const multiplicarnumeros = (callbackFunction, n1, n2) => {
    const mensajerecibido = callbackFunction (n1, n2);
    console.log(`El resultado de la multipliacion es:  ${n1}  ${n2}`);
}
multiplicarnumeros(multiplicar, 2 * 4); 



