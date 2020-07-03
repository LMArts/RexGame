function preload() {
  imagemCenario = loadImage('imagens/cenario/cenario.png');
  imagemGameOver = loadImage('imagens/assets/gameover.png');
  imagemYouWin = loadImage('imagens/assets/youwin.png');
  imagemPersonagem = loadImage('imagens/personagem/dino.png');
  imagemInimigo = loadImage('imagens/inimigos/medron.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/vairus.png');
  imagemVida = loadImage('imagens/assets/heart.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');   
  fita = loadJSON('fita/fita.json');
  fonteTelaInicial = loadFont('imagens/assets/dpcomic.ttf');
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}