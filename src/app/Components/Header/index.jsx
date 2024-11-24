'use client';
import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [menuBtn, setMenuBtn] = useState(false);
    console.log(menuBtn);

    // Função para realizar a rolagem suave até a seção específica
    const scrollToSection = (event, sectionId) => {
        event.preventDefault(); // Evita o comportamento padrão do link
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={styles.Header}>
            <h1 className={styles.h1}>Rafael <span className={styles.spanH1}>Vieira</span></h1>
            <ol className={menuBtn ? styles.HeaderMenuBtn : styles.HeaderBtn}>
                <li className={styles.li}>
                    <a
                        className={styles.lilink}
                        href="#home"
                        onClick={(e) => scrollToSection(e, '#home')}
                    >
                        Home
                    </a>
                </li>
                <li className={styles.li}>
                    <a
                        className={styles.lilink}
                        href="#sobremim"
                        onClick={(e) => scrollToSection(e, '#sobremim')}
                    >
                        Sobre mim
                    </a>
                </li>
                <li className={styles.li}>
                    <a
                        className={styles.lilink}
                        href="#habilidades"
                        onClick={(e) => scrollToSection(e, '#habilidades')}
                    >
                        Habilidades
                    </a>
                </li>
                <li className={styles.li}>
                    <a
                        className={styles.lilink}
                        href="#educacao"
                        onClick={(e) => scrollToSection(e, '#educacao')}
                    >
                        Educação
                    </a>
                </li>
                <li className={styles.li}>
                    <a
                        className={styles.lilink}
                        href="#contatos"
                        onClick={(e) => scrollToSection(e, '#contatos')}
                    >
                        Contatos
                    </a>
                </li>
                <li className={menuBtn ? styles.liMenu : styles.menuLiFecha} onClick={() => setMenuBtn(!menuBtn)}>
                    Fechar menu
                </li>
            </ol>
            <img
                src="/menu.svg"
                alt="menu"
                className={styles.menu}
                onClick={() => setMenuBtn(!menuBtn)}
            />
        </header>
    );
};

export default Header;
