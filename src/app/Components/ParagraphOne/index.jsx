import React, { useEffect, useState } from 'react';
import styles from "./ParagraphOne.module.css";
import Link from 'next/link';

const ParagraphOne = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Define o limite para quando o parágrafo deve aparecer/desaparecer
      const showParagraphLimit = 300;

      if (scrollTop > showParagraphLimit) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.paragrafo1}>
      <div className={styles.contentParagrafo1}>
        <div className={styles.content}>
          <h2 className={styles.titleMain} id='home'>Bem-vindo(a)</h2>
          <p
            className={`${styles.textBoasVindas} ${isVisible ? styles.show : styles.hide}`}
          >
            Olá, sou Rafael Vieira, desenvolvedor Full-stack apaixonado por criar soluções digitais inovadoras.
            Combinando criatividade, agilidade e tecnologia de ponta,
            transformo ideias em realidades tecnológicas.
            Explore meu portfólio e descubra como posso contribuir para o seu projeto!
          </p>

          <div className={styles.containerBtnHome}>
            <a
              href="/Rafael_Vieira_CV.pdf"
              download="Rafael_Vieira_CV.pdf"
            >
              <input className={styles.BaixarCV} value={"Baixar CV"} type="button" />
            </a>
            <Link className={styles.MeusProjetos} href={"#projetos"} type="button">Meus projetos</Link>
          </div>
        </div>

        <div className={styles.containerImg}>
          <img className={styles.imgAzul} src="/blusaAzul.jpg" alt="Minha foto" />
        </div>
      </div>
    </div>
  );
};

export default ParagraphOne;
