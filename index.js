class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  _saldo = 0;

  sacar(valor) {
    //Verifica se o saldo da conta corrente é igual ou maior do que o valor de saque desejavel
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
    }
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Vitor";
cliente1.cpf = 07321586219;

const cliente2 = new Cliente();
cliente2.nome = "Laura";
cliente2.cpf = 06821570515;

const contaCorrenteVitor = new ContaCorrente();
contaCorrenteVitor.saldo = 0;
contaCorrenteVitor.agencia = 1001;

contaCorrenteVitor.depositar(100);
contaCorrenteVitor.depositar(100);


const valorSacado = contaCorrenteVitor.sacar(50);
console.log(valorSacado);


console.log(contaCorrenteVitor);
