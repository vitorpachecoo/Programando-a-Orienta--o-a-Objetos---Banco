import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1 = new Cliente();
cliente1.nome = "Vitor";
cliente1.cpf = 7321586219;

const cliente2 = new Cliente();
cliente2.nome = "Laura";
cliente2.cpf = 6821570515;

const contaCorrenteVitor = new ContaCorrente();
contaCorrenteVitor._saldo = 0;
contaCorrenteVitor.agencia = 1001;
contaCorrenteVitor.cliente = cliente1;
contaCorrenteVitor.depositar(500);

const contaCorrenteLaura = new ContaCorrente();
contaCorrenteLaura.agencia = 1002;
contaCorrenteLaura.cliente = cliente2;


contaCorrenteVitor.transferir(250, contaCorrenteLaura);

console.log(contaCorrenteVitor);
console.log(contaCorrenteLaura);

