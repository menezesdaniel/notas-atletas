//implementacao da classe
class Jurados {
  constructor(atletas) {
    this.atletas = atletas;
  }

 ordenaNotas() {
    for (let i = 0; i < this.atletas.length; i++) {
      this.atletas[i].origem = this.atletas[i].notas
      
      this.atletas[i].notas = this.atletas[i].notas
        .sort((a, b) => a - b)
        .slice(1, 4);
    }
  }

  somaMediaNotas() {
    let soma = 0;
    for (let i = 0; i < this.atletas.length; i++) {
      this.atletas[i].notas.forEach(function (nota) {
        soma += nota;
      });
      this.atletas[i].media = soma / this.atletas[i].notas.length;
      soma = 0;
    }
  }
  
   mostraNotas() {
     for (let i = 0; i < this.atletas.length; i++) {
       console.log(`Atleta: ${this.atletas[i].nome}\nNotas Obtidas: ${this.atletas[i].origem}\nMédia Válida: ${this.atletas[i].media}`);
    }     
  }
}



//dados utilizados
let atletasDados = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

let atletas = new Jurados(atletasDados);

atletas.ordenaNotas();
atletas.somaMediaNotas();
atletas.mostraNotas();
