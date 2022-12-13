export class Cliente {
  nome;
  _cpf;
  email;

  get cpf () {
      return this._cpf;
  }

  constructor (nome, cpf, email) {
    this.nome = nome;
    this._cpf = cpf;
    this.email = email;
  }
}

