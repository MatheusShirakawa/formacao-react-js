import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numero_contas = 0;
    // constructor
    constructor(agencia,cliente){
        super(0, agencia,cliente);
        ContaCorrente.numero_contas += 1;
    }

    // sobrescrevendo o comportamento de sacar
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}