function Header(){
    return(
        /* className="center": técnica para design responsivo, sempre limita a largura */
        <div className="center">
          <div className="header">

            <div className="logo">
                <h2>Vinícius Augusto</h2>
            </div>

            <div className="menu">
                <div className="item-menu">
                <a href='#'>Início</a>
                </div>
                <div className="item-menu">
                <a href='#'>Sobre</a>
                </div>
                <div className="item-menu">
                <a href='#'>Contato</a>
                </div>
            </div>

          </div>

        </div>
    );
}

export default Header;