function Animal (nome, idade, som) {
    this.nome = nome;
    this.idade = idade;
    this.som = som;

    this.emitirSom = function() {
        console.log(this.nome + " emite o som: " + this.som);
    }
}

function Cachorro (nome, idade) {
    Animal.call(this, nome, idade, "Au Au!");
}

function Gato (nome, idade) {
    Animal.call(this, nome, idade, "Miau!");
}

const milo = new Cachorro('Rex', 5);
const simba = new Gato ('Simba', 2);
const rex = new Cachorro ('Rex', 3);

console.log(milo);
console.log(simba);
console.log(rex);

milo.emitirSom();
simba.emitirSom();
rex.emitirSom();

