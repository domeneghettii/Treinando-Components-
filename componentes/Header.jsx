import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    // Definiendo a estrutura do cabeçalho da página
    <header className={styles.header}>
    
      {/* Barra superior com o logo e informações de entrega */}
      <div className={styles.topBar}>

        {/* Logo da Amazon com link para a página inicial */} 
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className={styles.logo}
        />

        {/* Informações de entrega com ícone de localização e opção de atualizar CEP */}

        <span className={styles.deliveryInfo}>
          <span role="img" aria-label="location">📍</span> A entrega será feita em Valinhos 13270000
          <a href="#" className={styles.updateCep}>Atualizar CEP</a>
        </span>
      </div>

      {/* Barra de opções com links para login, contas e listas, devoluções e carrinho */}
      {/* A barra de opções contém links para login, contas e listas, devoluções e carrinho */}
  
      <div className={styles.options}>
        <span>Olá, faça seu login</span>
        <span>Contas e Listas</span>
        <span>Devoluções e Pedidos</span>
        <span>Carrinho <span role="img" aria-label="cart">🛒</span></span>
      </div>


      {/* Barra de pesquisa com opções de categoria e botão de pesquisa */}
      {/* A barra de pesquisa contém um seletor de categoria, um campo de entrada para pesquisa e um botão de pesquisa */}
     
      <div className={styles.searchBar}>
        <select className={styles.categorySelect}>
          <option value="todos">Todos</option>
        </select>
        <input type="text" placeholder="Pesquisar Amazon.com.br" />
        <button className={styles.searchButton}>
          <span role="img" aria-label="search">🔍</span>
        </button>
      </div>


      {/* Barra de navegação com links para diferentes seções do site */}
     
      <nav className={styles.navbar}>
        <span>Todos</span>
        <span>Venda na Amazon</span>
        <span>Mais Vendidos</span>
        <span>Ofertas do Dia</span>
        <span>Prime</span>
        <span>Livros</span>
        <span>Música</span>
        <span>Novidades na Amazon</span>
        <span className={styles.highlight}>Apple TV+ agora no Prime Video</span>
      </nav>
    </header>
  );
};

export default Header;