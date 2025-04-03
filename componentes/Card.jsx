import React from 'react';
import styles from '../styles/Card.module.css'; // Importando o CSS do Card

const Card = () => {
    const cards = [
        { 
            title: 'Confira Kits de Produto', 
            description: 'Veja mais em Kits de Produto', 
            image: 'https://images-na.ssl-images-amazon.com/images/G/32/br-consumables/2023/gw/XCM_CUTTLE_1694668_3628957_758x608_2X_pt_BR._SY608_CB581204885_.jpg' 
        },
        { 
            title: 'Jogos com frete GRÁTIS Prime', 
            description: 'Veja mais em Brinquedos', 
            image: 'https://images-na.ssl-images-amazon.com/images/G/32/SHOPEX/EvergreenQ1_25/DESKTOP_SINGLEIMAGE/RBS_Q1_Evergreen_Desktop_SingleImage_OHL_Veja_mais_em_Brinquedos._SY608_CB539319162_.jpg' 
        },
        { 
            title: 'Cooktops com frete GRÁTIS Prime', 
            description: 'Veja mais em Eletrodomésticos', 
            image: 'https://images-na.ssl-images-amazon.com/images/G/32/SHOPEX/EvergreenQ1_25/DESKTOP_SINGLEIMAGE/RBS_Q1_Evergreen_Desktop_SingleImage_OHL_Veja_mais_em_Eletrodomesticos._SY608_CB539319162_.jpg' 
        },
        { 
            title: 'Recomendações de livros para você', 
            description: 'Confira agora', 
            image: 'https://images-na.ssl-images-amazon.com/images/G/32/kindle/email/2024/CLC/Recommendations/Ajusted/Single_image_card_602_1._SY608_CB540872893_.jpg' 
        },
    ];

    return (
        <div className={styles['cards-container']}>
            {cards.map((card, index) => (
                <div key={index} className={styles.card}>
                    <h2>{card.title}</h2>
                    <img src={card.image} alt={card.title} />
                    <a href="#" className={styles.link}>{card.description}</a> {/* Link adicionado */}
                </div>
            ))}
        </div>
    );
};

export default Card;