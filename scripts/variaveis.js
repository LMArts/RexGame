let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoVoador;
let imagemTelaInicial;
let fonteTelaInicial;
let imagemGameOver;
let imagemYouWin;
let somDoPulo;
let jogo;
let telaInicial;
let botaoGerenciador;
let imagemVida;

let fita;

let cenario;
let somDoJogo;
let personagem;
let inimigo;
let inimigoVoador;
let pontuacao;
let vida;

let cenaAtual = 'telaInicial';
let cenas;


const matrizPersonagem = [
  [0, 0],
  [280, 0],
  [560, 0],
  [840, 0],
  [0, 270],
  [280, 270],
  [560, 270],
  [840, 270],
  [0, 540],
  [280, 540],
  [560, 540],
  [840, 540],
  [0, 810],
  [280, 810],
  [560, 810],
  [840, 810],
]
const matrizInimigoVoador = [

  [0,0],
  [280,0],
  [560,0],
  [0,260],
  [280,260],
  [560,260],
  [0,520],
  [280,520],
  [560,520],
  [0,780],
]

const matrizInimigo = [
  [0,0],
  [280, 0],
  [560, 0],
  [840,0],
  [0,260],
  [280, 260],
  [560, 260],
  [840,260],
  [0,520],
  [280, 520],
  [560, 520],
  [840,520],
  [0,780],
  [280, 780],
  [560, 780],
]

const inimigos = [];