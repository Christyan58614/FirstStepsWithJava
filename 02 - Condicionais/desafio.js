
// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço da Gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustivel do carro por KM;
//  5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar está viagem.


const pGasolina = 6.56;
const pEtanol = 5.79;
const tCombustivel = 'Gasolina';
const kmPorLitro = 12.9;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * pEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * pGasolina;
    console.log(valorGasto.toFixed(2));
}