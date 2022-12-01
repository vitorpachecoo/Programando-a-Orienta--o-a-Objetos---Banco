export class ContaCorrente {
  agencia;
  cliente;

  _saldo = 0;

  sacar(valor) {
    //Verifica se o saldo da conta corrente é igual ou maior do que o valor de saque desejavel
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  //Deposita o valor desejado caso o valor de deposito seja maior do que zero
  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
    }
  }

  //Realiza a transferencia do saldo de uma conta para a cnta (CONTA DE OUTRO USUARIO)
  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valor)
  }
}
