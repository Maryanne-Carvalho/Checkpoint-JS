const alunoConstrutor = require('./aluno');
const listaEstudantes = require('./estudantes');

var curso = {
    nomeCurso: "Programação Imperativa",
    notaAprovacao: 7,
    faltasMaxima: 5,
    listaDeEstudantes: listaEstudantes,
    adicionarAluno: function (aluno) {
        this.listaDeEstudantes.push(aluno)
    },
    verificarAprovacao: function (aluno) {
        var isaprovado;
        if (aluno.qtdFaltas < this.faltasMaxima && aluno.calcularMedia() >= this.notaAprovacao || aluno.falta == this.faltasMaxima && aluno.calcularMedia() >= this.notaAprovacao * 1.1) {
            isaprovado = true;
        } else {
            isaprovado = false;
        } return 'Aluno(a) ' + aluno.nome + ' Aprovado?-' + isaprovado;
    },
    resultadosAlunos: function (alunos) {
        var arrayResultados = [];
        for (var i = 0; i < alunos.length; i++) {
            arrayResultados[i] = this.verificarAprovacao(alunos[i])
        } return arrayResultados;
    }
};


console.log(curso.listaDeEstudantes);
console.log(curso.listaDeEstudantes[3].calcularMedia());
console.log(curso.verificarAprovacao(curso.listaDeEstudantes[2]));
console.log(curso.resultadosAlunos(curso.listaDeEstudantes));
