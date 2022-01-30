
import { Cliente } from './Cliente.js';
import { Conta } from './Conta/Conta.js';
import { ContaCorrente } from './Conta/ContaCorrente.js';
import { ContaPoupanca } from './Conta/ContaPoupanca.js';
import { Gerente } from './Funcionario/Gerente.js';
import { Diretor } from './Funcionario/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const cliente1 = new Cliente('Ricardo','003219312','123');
// const cliente2 = new Cliente('Teste','2313123');

const diretor = new Diretor('Rodrigo', 10000, 2310391203);
const gerente = new Gerente('Ricardo', 5000, 2301481293);

diretor.cadastrarSenha("1234");
gerente.cadastrarSenha("1234");

const gerenteEstaLogado = SistemaAutenticacao.login(diretor, "1234");
const diretorEstaLogado = SistemaAutenticacao.login(gerente, "1234");

console.log(gerenteEstaLogado);
console.log(diretorEstaLogado);


// const conta1 = new ContaCorrente(1001,cliente1);
// const conta2 = new ContaPoupanca(50,cliente2,1001);


