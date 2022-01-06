import './App.css';
import Contact from './components/contact/contact';
import Content from './components/content/content';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <div className="main">

        <Header />
        <Content />
        <Contact />
      </div>
      
    </div>
  );
}

export default App;
