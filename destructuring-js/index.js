const numeroPares= [2,4,6];
const numerosImpares = [1,3,5];

const numeros = [...numeroPares,...numerosImpares];
//[2,4,6][1,3,5]

const [num1 , num2, ...outros] = [1,2,3,4,5];
// 1 2 [3,4,5]

const [nome1 = 'Ju'] = []; // or [1]
// ju
// 1

const pessoa = {
    nome:'ju',
    idade:25,
}
// nome : ju, idade : 25

const pessoaComTelefone = {...pessoa,telefone:893829889}
// nome : ju, idade : 25, telefone : 893829889

const { idade } = pessoa;
// 25

function imprimeDados(dados){
    const {nome, idade} = dados;
    console.log(nome, idade);
    // ju 25
}

function imprimeDados({nome,idade}){
    console.log(nome, idade);
    // ju 25
}

imprimeDados(pessoa);