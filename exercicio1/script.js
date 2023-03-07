console.log(`!--- Valor da coxinha R$ 2,50 ---!`)

let pergunta = prompt(`Deseja comer mais coxinha? 
Digite S para Sim
Digite N para Não`).toUpperCase();

let conta = 0;

while(pergunta === 'S'){

    conta = conta + 2.50

    pergunta = prompt(`Deseja comer mais coxinha? 
Digite S para Sim
Digite N para Não`).toUpperCase();

}
console.log(`Valor Total: R$ ${conta.toFixed(2)} reais.`)