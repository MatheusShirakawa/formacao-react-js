class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    // #saldo https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }
}

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo._saldo = 0;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(200);
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(valorSacado);
console.log(contaCorrenteRicardo);

