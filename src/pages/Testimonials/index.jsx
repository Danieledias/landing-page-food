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
                                    Fulana de Tal
                                    <span>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </span>
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing industry.
                                    Lorem Ipsum is simply dummy text of the printing industry.
                                </p>
                            </div>
                        </div>

                        <div className='feedback'>
                            <img src={Avatar} alt="Imagem de avatar" className='feedback-avatar' />

                            <div className="feedback-content">
                                <p>
                                    Fulana de Tal
                                    <span>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </span>
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing industry.
                                    Lorem Ipsum is simply dummy text of the printing industry.
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
