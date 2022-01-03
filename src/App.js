import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">

        {/* técnica para design responsivo, sempre limita a largura */}
        <div className="center">
          <div className="header">

            <div className="logo">
                <h2>Vinícius Augusto</h2>
            </div>

            <div className="item-menu">
              <a href='#'>Início</a>
            </div>

          </div>

          <h3>Entre em contato!</h3>
          <div className='form'>
            <div className='items-form'>
              <input type="text" placeholder='Nome Completo'/>
              <input type="text" placeholder='Mensagem'/>
              <input type="submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
