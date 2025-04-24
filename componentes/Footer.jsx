import React from "react";
import styles from "../styles/Footer.module.css"; // Importando o CSS da Footer


// Definindo o componente Footer
// Este componente representa o rodapé da página, que contém informações adicionais e links úteis para os usuários.
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSections}>
        <div>
          <h4>Conheça-nos</h4>
          <ul>
            <li>Sobre a Amazon</li>
            <li>Informações corporativas</li>
          </ul>
        </div>
        <div>
          <h4>Ganhe dinheiro conosco</h4>
          <ul>
            <li>Venda na Amazon</li>
            <li>Proteja e construa a sua marca</li>
          </ul>
        </div>
        <div>
          <h4>Pagamento</h4>
          <ul>
            <li>Meios de Pagamento</li>
            <li>Compre com Pontos</li>
          </ul>
        </div>
        <div>
          <h4>Deixe-nos ajudar você</h4>
          <ul>
            <li>Sua conta</li>
            <li>Frete e prazo de entrega</li>
            <li>Devoluções e reembolsos</li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
        />
        <span>Brasil</span>
      </div>
      <div className={styles.footerLegal}>
        <p>
          Condições de Uso | Notificação de Privacidade | Cookies | Anúncios
          Baseados em Interesses
        </p>
        <p>© 2021-2025 Amazon.com, Inc. ou suas afiliadas</p>
        <p>
          Amazon Serviços de Varejo do Brasil Ltda. | CNPJ 15.436.940/0001-03
        </p>
      </div>
    </footer>
  );
};

export default Footer;
