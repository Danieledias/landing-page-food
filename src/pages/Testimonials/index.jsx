import React from 'react';
import Chef from '../../assets/images/chef.png';
import Avatar from '../../assets/images/avatar.png';
import './testimonials.css';

const Testimonials = () => {
    return (
        <>
            <section id='testimonials'>
                <img src={Chef} alt="Imagem de chef" id='testimonial-chef' />

                <div id='testimonials-content'>
                    <h2 className='section-title'>
                        Avaliações
                    </h2>
                    <h3 className='section-subtitle'>
                        O que os clientes falam sobre nós
                    </h3>

                    <div id='feedbacks'>
                        <div className='feedback'>
                            <img src={Avatar} alt="Imagem de avatar" className='feedback-avatar' />

                            <div className="feedback-content">
                                <p>
                                    Ana Silva
                                    <span>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </span>
                                </p>
                                <p>
                                    A experiência foi incrível! Os pratos são deliciosos e frescos, e o atendimento é impecável.
                                    Recomendo a todos que buscam uma refeição saborosa e bem preparada.
                                </p>
                            </div>
                        </div>

                        <div className='feedback'>
                            <img src={Avatar} alt="Imagem de avatar" className='feedback-avatar' />

                            <div className="feedback-content">
                                <p>
                                    Carla Oliveira
                                    <span>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </span>
                                </p>
                                <p>
                                    Adorei o sanduíche natural de frango e o macarrão com camarão.
                                    Cada prato é feito com cuidado e tem um sabor único. Sem dúvida, voltarei mais vezes!
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        className='btn-default'>
                        Ver mais avaliações
                    </button>
                </div>
            </section>
        </>
    );
}

export default Testimonials;
