function Alunos(nome, qtdFaltas, notas) {
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;
    this.calcularMedia = function(){
        var somaNotas = this.notas.reduce((total, valor) =>{
            return total+valor;
        });
        return somaNotas/this.notas.length;
    }
    this.somarFaltas = function(){
        return this.faltas=this.faltas+1;
    }
}module.exports = Alunos;