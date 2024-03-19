class Aluno {
    constructor (nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const alunos = [
    new Aluno("João", 7),
    new Aluno("Maria", 5),
    new Aluno("Pedro", 8),
    new Aluno("Ana", 6),
    new Aluno("Carlos", 4),
];

const filtraAlunosAprovados = aluno => aluno.nota >= 6;

const alunosAprovados = alunos.filter(filtraAlunosAprovados);

console.log("Os alunos aprovados são:");
alunosAprovados.forEach(aluno => {
    console.log(`Nome: ${aluno.nome} - Nota: ${aluno.nota}`);
});