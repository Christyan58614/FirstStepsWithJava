/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variaveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da Viagem;

*/
const precoCombustivel = 5.79;
const kmPorLitro = 12.9;
const distanciaEmKm = 43;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));