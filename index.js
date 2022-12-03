import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1 = new Cliente();
cliente1.nome = "Vitor";
cliente1.cpf = 111116219;
cliente1.email = "pachecovitor090@gmail.com";

const cliente2 = new Cliente();
cliente2.nome = "Laura";
cliente2.cpf = 222210512;
cliente2.email = "laura123@gmail.com";

const contaCorrenteVitor = new ContaCorrente();
contaCorrenteVitor._saldo = 0;
contaCorrenteVitor.agencia = 1001;
contaCorrenteVitor.cliente = cliente1;
contaCorrenteVitor.depositar(500);

const contaCorrenteLaura = new ContaCorrente();
contaCorrenteLaura.agencia = 1002;
contaCorrenteLaura.cliente = cliente2;

let valor = 200;

contaCorrenteVitor.transferir(valor, contaCorrenteLaura);

console.log(contaCorrenteVitor.cliente);
console.log(contaCorrenteLaura.saldo);

console.log(cliente1.saldo);

