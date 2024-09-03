import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
    const [activeSection, setActiveSection] = useState(0);

    const handleMobileBtnClick = () => {
        setIsMobileMenuActive(!isMobileMenuActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            const sections = document.querySelectorAll('section');
            const navItems = document.querySelectorAll('.nav-item');
            const scrollPosition = window.scrollY - header.offsetHeight;

            let activeSectionIndex = 0;

            if (scrollPosition <= 0) {
                header.style.boxShadow = 'none';
            } else {
                header.style.boxShadow = '5px 1px 5px rgba(0, 0, 0, 0.1)';
            }

            sections.forEach((section, i) => {
                const sectionTop = section.offsetTop - 96;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    activeSectionIndex = i;
                }
            });

            setActiveSection(activeSectionIndex);

            navItems.forEach((item, index) => {
                item.classList.toggle('active', index === activeSectionIndex);
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header>
                <nav id='navbar'>
                    <i className="fa-solid fa-burger" id='nav-logo'> Food</i>

                    <ul id='nav-list'>
                        <li className={`nav-item ${activeSection === 0 ? 'active' : ''}`}>
                            <a href='#home'>Início</a>
                        </li>
                        <li className={`nav-item ${activeSection === 1 ? 'active' : ''}`}>
                            <a href='#menu'>Cardápio</a>
                        </li>
                        <li className={`nav-item ${activeSection === 2 ? 'active' : ''}`}>
                            <a href='#testimonials'>Avaliações</a>
                        </li>
                    </ul>

                    <button className='btn-default'>
                        Peça aqui
                    </button>

                    <button id='mobile-btn' onClick={handleMobileBtnClick}>
                        <i className={`fa-solid ${isMobileMenuActive ? 'fa-x' : 'fa-bars'}`}></i>
                    </button>
                </nav>

                <div id='mobile-menu' className={isMobileMenuActive ? 'active' : ''}>
                    <ul id='mobile-nav-list'>
                        <li className='nav-item'>
                            <a href='#home'>Início</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#menu'>Cardápio</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#testimonials'>Avaliações</a>
                        </li>
                    </ul>
                    <button className='btn-default'>
                        Peça aqui
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;
