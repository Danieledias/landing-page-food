import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Foods from '../../assets/images/hero.png';
import './home.css';

const Home = () => {
    const handleClick = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        ScrollReveal().reveal('#cta', {
            origin: 'left',
            duration: 2000,
            distance: '20%'
        });

        ScrollReveal().reveal('.dish', {
            origin: 'left',
            duration: 2000,
            distance: '20%'
        });

        ScrollReveal().reveal('#testimonial_chef', {
            origin: 'left',
            duration: 1000,
            distance: '20%'
        });

        ScrollReveal().reveal('.feedback', {
            origin: 'right',
            duration: 1000,
            distance: '20%'
        });
    }, []);

    return (
        <>
            <main id='content'>
                <section id='home'>
                    <div className='shape'></div>
                    <div id='cta'>
                        <h1 className='title'>
                            O sabor que vai até
                            <span> você</span>
                        </h1>

                        <p className='description'>
                        Transforme seus momentos em uma explosão de sabores inesquecíveis.
                        </p>

                        <div id='cta-buttons'>
                            <a href='#menu' className='btn-default'>
                                Ver cardápio
                            </a>

                            <a href='tel:+55555555' id='phone-button' >
                                <button className='btn-default'>
                                    <i class='fa-solid fa-phone'></i>
                                </button>
                                (41) 9988-2020
                            </a>
                        </div>

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

                    <div id='banner'>
                        <img src={Foods} alt='Imagem de comida' />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;
