//* map(): método map() cria um novo array com os resultados da chamada de uma função para cada elemento do array original. Ele é usado para transformar um array  em outro array com os mesmo elementos, mas com cada elemento transformado de alguma forma.*//
const numeros = [1,2,3,4,5];
const numerosMultiplicadosPorDois = numeros.map(numero=> numero *2);
console.log ( numerosMultiplicadosPorDois);


//* filter() O método filter() cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.Ele é usado para filtrar com base em algum critério.

const numeros= [1,2,3,4,5];
const numerosPares = numeros.filter(numero => numero% 2===0);
console.log(numerosPares);

//* reduce( ) executa uma função redutora em cada elemento do array, resultando em um único valor de retorno, usado para reduzir um array para um único valor:

const numeros= [1,2,3,4,5];
const somaDosNumeros = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(somaDosNumeros);

//*slice(): O método slice() retorna uma copia da parte de um array em um novo array. Ele é usado para extrair uma parte de um array sem modificar o array original:*//

const numeros = [1, 2, 3, 4, 5]
const primeirosTresNumeros = numeros.slice(0, 3);
console.log(primeirosTresNumeros);

//*concat() Combina dois ou mais arrays em um novo array. Usado para juntar arrays em um único array.
const numeros1 = [1, 2, 3, 4];
const numero2 = [ 5, 6, 7, 8];
const todosOsNumeros = numeros1.concat(numero2);
console.log(todosOsNumeros);







