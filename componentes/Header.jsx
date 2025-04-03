import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className={styles.logo}
        />
        <span className={styles.deliveryInfo}>
          A entrega será feita em Valinhos 13270000
          <a href="#" className={styles.updateCep}>Atualizar CEP</a>
        </span>
      </div>

      {/* Search Bar */}
      <div className={styles.searchBar}>
        <select className={styles.categorySelect}>
          <option value="todos">Todos</option>
        </select>
        <input type="text" placeholder="Pesquisar Amazon.com.br" />
        <button className={styles.searchButton}>
          <span role="img" aria-label="search">🔍</span>
        </button>
      </div>

      {/* Options */}
      <div className={styles.options}>
        <span>Olá, faça seu login</span>
        <span>Contas e Listas</span>
        <span>Devoluções e Pedidos</span>
        <span>Carrinho <span role="img" aria-label="cart">🛒</span></span>
      </div>

      {/* Navigation Bar */}
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