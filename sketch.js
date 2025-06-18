function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let temperatura;
let arvoresPlantadas;
let tempoInicial;
let jogoTerminado = false;

function setup() {
  createCanvas(600, 400);
  // Define a temperatura inicial (pode ajustar)
  temperatura = 30; // Graus Celsius
  arvoresPlantadas = 0;
  tempoInicial = millis(); // Guarda o tempo de início do jogo

  // Configurações iniciais do texto
  textSize(24);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220); // Cor de fundo cinza claro

  if (!jogoTerminado) {
    // Exibe a temperatura atual
    fill(0); // Cor do texto preta
    text("Temperatura da Terra: " + nf(temperatura, 0, 1) + "°C", width / 2, height / 3);

    // Exibe a quantidade de árvores plantadas
    text("Árvores Plantadas: " + arvoresPlantadas, width / 2, height / 2);

    // Instruções para o jogador
    textSize(18);
    text("Clique com o mause para plantar uma árvore e diminuir a temperatura!", width / 2, height - 50);

    // Lógica para a temperatura subir lentamente com o tempo (se não estiver plantando)
    // Isso evita que o jogador ganhe sem interagir
    let tempoAtual = millis();
    if (tempoAtual - tempoInicial > 1000) { // A cada 1 segundo
      temperatura += 0.05; // A temperatura sobe um pouco (pode ajustar)
      tempoInicial = tempoAtual;
    }

    // Condição de vitória: temperatura abaixo de um certo valor
    if (temperatura <= 15) { // Altere este valor para a temperatura alvo
      jogoTerminado = true;
    }

  } else {
    // Mensagem de vitória
    fill(0, 150, 0); // Cor verde
    textSize(48);
    text("VOCÊ VENCEU!", width / 2, height / 2 - 40);
    textSize(24);
    text("A temperatura da Terra está em " + nf(temperatura, 0, 1) + "°C", width / 2, height / 2 + 20);
    text("Você plantou " + arvoresPlantadas + " árvores!", width / 2, height / 2 + 60);
  }
}

function mousePressed() {
  if (!jogoTerminado) {
    // Ao clicar, planta uma árvore e a temperatura cai
    arvoresPlantadas++;
    temperatura -= 0.5; // A temperatura cai por árvore (pode ajustar)
    // Garante que a temperatura não caia abaixo de zero ou valores absurdos
    temperatura = max(temperatura, -5);
  }
}