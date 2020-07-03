class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 15, 140, 135, 280, 270);
    //const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 20, 52, 52, 104, 104, 10);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 20, 70, 65, 280, 260, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 150, 70, 65, 280, 260, 10);

    inimigos.push(inimigo)
    inimigos.push(inimigoVoador)
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula()
      somDoPulo.play()
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();

    vida.draw();
    
    pontuacao.exibe()
    pontuacao.adicionarPonto()
    
    personagem.exibe();
    personagem.aplicaGravidade();
    
    if (pontuacao.pontos >= 120){
      image(imagemYouWin, width / 2 - 150, height / 4)
      noLoop()
    }

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;
    
    inimigo.exibe()
    inimigo.move()

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVidas();
      personagem.tornarInvencivel();
      if (vida.vidas === 0){
        image(imagemGameOver, width / 2 - 200, height / 3)
        noLoop()
      }
    }

  }

}