import './App.css';
import Contact from './components/contact/contact';
import Content from './components/content/content';

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

          <Contact />
      


        </div>
      </div>
      <Content />
    </div>
  );
}

export default App;
