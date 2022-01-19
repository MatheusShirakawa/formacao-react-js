
import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente('Ricardo','003219312');
const cliente2 = new Cliente('Teste','2313123');

const conta1 = new ContaCorrente(1001,cliente1);
const conta2 = new ContaCorrente(1002,cliente2);

conta1.depositar(500);
conta1.transferir(200, conta2);

console.log(conta1);
console.log(conta2);

console.log(ContaCorrente.numero_contas);