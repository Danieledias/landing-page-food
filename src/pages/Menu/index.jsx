import React from 'react';
import Dish1 from '../../assets/images/dish.png';
import Dish2 from '../../assets/images/dish2.png';
import Dish3 from '../../assets/images/dish3.png';
import Dish4 from '../../assets/images/dish4.png';
import './menu.css';

const Menu = () => {
    return (
        <>
          <section id='menu'>
            <h2 className='section-title'>
                Cardápio
            </h2>
            <h3 className='section-subtitle'>
                Nossos pratos especiais
            </h3>

            <div id='dishes'>
                <div className='dish'>
                    <div className='dish-heart'>
                        <i className='fa-solid fa-heart'></i>
                    </div>

                    <img src={Dish1} alt='imagem de prato' className='dish-image' />

                    <h3 className='dish-title'>
                        Lorem Ipsum
                    </h3>

                    <span className='dish-description'>
                    Lorem Ipsum is simply dummy text of the printing industry.
                    </span>

                    <div className='dish-rate'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <span>(500+)</span>
                    </div>

                    <div className="dish-price">
                        <h4>R$ 20,00</h4>
                        <button className='btn-default'>
                            <i class="fa-solid fa-basket-shopping"></i>
                        </button>
                    </div>
                </div>

                <div className='dish'>
                    <div className='dish-heart'>
                        <i className='fa-solid fa-heart'></i>
                    </div>

                    <img src={Dish2} alt='imagem de prato' className='dish-image' />

                    <h3 className='dish-title'>
                        Lorem Ipsum
                    </h3>

                    <span className='dish-description'>
                    Lorem Ipsum is simply dummy text of the printing industry.
                    </span>

                    <div className='dish-rate'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <span>(500+)</span>
                    </div>

                    <div className="dish-price">
                        <h4>R$ 20,00</h4>
                        <button className='btn-default'>
                            <i class="fa-solid fa-basket-shopping"></i>
                        </button>
                    </div>
                </div>
                
                <div className='dish'>
                    <div className='dish-heart'>
                        <i className='fa-solid fa-heart'></i>
                    </div>

                    <img src={Dish3} alt='imagem de prato' className='dish-image' />

                    <h3 className='dish-title'>
                        Lorem Ipsum
                    </h3>

                    <span className='dish-description'>
                    Lorem Ipsum is simply dummy text of the printing industry.
                    </span>

                    <div className='dish-rate'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <span>(500+)</span>
                    </div>

                    <div className="dish-price">
                        <h4>R$ 20,00</h4>
                        <button className='btn-default'>
                            <i class="fa-solid fa-basket-shopping"></i>
                        </button>
                    </div>
                </div>

                <div className='dish'>
                    <div className='dish-heart'>
                        <i className='fa-solid fa-heart'></i>
                    </div>

                    <img src={Dish4} alt='imagem de prato' className='dish-image' />

                    <h3 className='dish-title'>
                        Lorem Ipsum
                    </h3>

                    <span className='dish-description'>
                    Lorem Ipsum is simply dummy text of the printing industry.
                    </span>

                    <div className='dish-rate'>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <span>(500+)</span>
                    </div>

                    <div className="dish-price">
                        <h4>R$ 20,00</h4>
                        <button className='btn-default'>
                            <i class="fa-solid fa-basket-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>
          </section>
        </>
    );
}

export default Menu;
