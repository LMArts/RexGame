function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40)
  jogo = new Jogo();
  jogo.setup();
  somDoJogo.loop();
  telaInicial = new TelaInicial();
  cenas = {
    jogo,
    telaInicial
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  
  cenas[cenaAtual].draw();

}