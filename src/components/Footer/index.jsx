import React from 'react';
import Wave from '../../assets/images/wave.svg';
import './footer.css';
const Footer = () => {
    const handleClick = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <footer>
                <img src={Wave} alt="Imagem do footer wave" />

                <div id='footer-itens'>
                    <span id='copyright'>
                    © 2024 Daniele Dias
                    </span>
                    <div className='social-media-buttons'>
                        <a href='' onClick={handleClick}>
                            <i class='fa-brands fa-whatsapp'></i>
                        </a>
                        <a href='' onClick={handleClick}>
                            <i class='fa-brands fa-instagram'></i>
                        </a>
                        <a href='' onClick={handleClick}>
                            <i class='fa-brands fa-facebook'></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
