
import { Cliente } from './Cliente.js';
import { Conta } from './Conta.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Ricardo','003219312');
const cliente2 = new Cliente('Teste','2313123');

const conta1 = new ContaCorrente(1001,cliente1);
const conta2 = new ContaPoupanca(50,cliente2,1001);

const conta3 = new Conta(0,cliente2, 1002);

// conta1.depositar(500);

console.log(conta3);
// console.log(conta2);
