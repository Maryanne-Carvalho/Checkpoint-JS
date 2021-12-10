const aluno = require('./aluno');

var aluno1 = new aluno("Danielle Alves", 3,[6, 7, 7])
var aluno2 = new aluno("Thabata Carrion", 0,[10, 5, 10])
var aluno3 = new aluno("Issao Takeuchi", 5,[6, 8, 9])
var aluno4 = new aluno("Luiz de Souza", 0,[10, 5, 8])
var aluno5 = new aluno("Patricio Silva", 10,[0, 6, 7])
var aluno6 = new aluno("Maryanne Carvalho", 2,[10, 7, 8])

const estudantes = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6];
module.exports = estudantes;

