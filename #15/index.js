// Array de números da sorte fornecido pela atividade
const numerosDaSorte = [37, 14, 26, 5, 94, 87];

// Loop para percorrer cada elemento do array
for (let i = 0; i < numerosDaSorte.length; i++) {
  const x = numerosDaSorte[i];

  // Avaliação das condições solicitadas
  if (x < 50) {
    if (x % 2 === 0) {
      // Se for par e menor que 50
      console.log(`${x} é par e menor que 50`);
    } else {
      // Se for ímpar e menor que 50
      console.log(`${x} é menor que 50`);
    }
  } else {
    // Se for maior que 50
    console.log(`${x} é maior que 50`);
  }
}
