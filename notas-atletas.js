let atletas = [
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

function calcularMediaAtletas(listaAtletas) {
  for (let i = 0; i < listaAtletas.length; i++) {
    let atleta = listaAtletas[i];
    let notas = atleta.notas.slice(); // faz uma cópia para não modificar o original

    // Ordenar notas
    notas.sort((a, b) => a - b);

    // Eliminar menor (index 0) e maior (último index)
    let notasValidas = notas.slice(1, 4); // pega as três do meio

    // Calcular média
    let soma = 0;
    notasValidas.forEach(nota => {
      soma += nota;
    });
    let media = soma / notasValidas.length;

    // Exibir resultado
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(",")}`);
    console.log(`Média Válida: ${media.toFixed(8)}\n`);
  }
}

// Executa a função
calcularMediaAtletas(atletas);
