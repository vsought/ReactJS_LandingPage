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

          
          <div className='form'>
            <h3>Entre em contato!</h3>
            <form>
              <div className='items-form'>
                <input type="text" placeholder='Nome Completo'/>
                <input type="text" placeholder='Mensagem'/>
                <input type="submit" />
              </div>
            </form>
          </div>


        </div>
      </div>

      <div className='content'>
        <div className='center'>
          <div className='text'>
            <h3>Título</h3>
            <p>asndbuadabuxaixjashxuasgxyutagsxiuahsx</p>
          </div>
          <div className='text'>
            <h3>Título</h3>
            <p>asndbuadabuxaixjashxuasgxyutagsxiuahsx</p>
          </div>
          <div className='text'>
            <h3>Título</h3>
            <p>asndbuadabuxaixjashxuasgxyutagsxiuahsx</p>
          </div>
          <div className='text'>
            <h3>Título</h3>
            <p>asndbuadabuxaixjashxuasgxyutagsxiuahsx</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
