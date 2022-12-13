import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1 = new Cliente("Vitor", 111116219, "pachecovitor090@gmail.com");
const cliente2 = new Cliente("Laura", 222210512, "laura123@gmail.com");

const contaCorrenteVitor = new ContaCorrente(cliente1, 1001);
contaCorrenteVitor.depositar(500);

const contaCorrenteLaura = new ContaCorrente(cliente2, 1002);

let valor = 200;

contaCorrenteVitor.transferir(valor, contaCorrenteLaura);

console.log(contaCorrenteVitor);
console.log(contaCorrenteLaura);
console.log(numeroDeContas);
