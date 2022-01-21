
import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Ricardo','003219312');
const cliente2 = new Cliente('Teste','2313123');

const conta1 = new ContaCorrente(1001,cliente1);
const conta2 = new ContaPoupanca(50,cliente2,1001);

conta1.depositar(500);

console.log(conta1);
console.log(conta2);
