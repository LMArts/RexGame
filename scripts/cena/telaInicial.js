class TelaInicial{
  constructor(){
  }
  
  draw(){
    this._imagemDeFundo();
    //this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  /**_texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    fill('#fc382a');
    textSize(100);
    text('RexGame', width/1.9, height/5.5);
  }**/
  
  _botao(){
    botaoGerenciador.y = height / 7 * 5.5;
    botaoGerenciador.draw();
  }
  
}