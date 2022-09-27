import './Rodape.css';

const Rodape = () => {
  return (
    <footer className="footer">
      <div className="sociais">
        <img className="social-logo" src="/imagens/fb.png"></img>
        <img className="social-logo" src="/imagens/tw.png"></img>
        <img className="social-logo" src="/imagens/ig.png"></img>
      </div>
      <div className="organo-logo">
        <img src="/imagens/logo.png"></img>
      </div>
      <div className="alura-logo">
        <p>Desenvolvido por Alura.</p>
      </div>
    </footer>
  );
}

export default Rodape;