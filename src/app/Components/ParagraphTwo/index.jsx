import React, { useEffect, useState } from "react";
import styles from "./ParagraphTwo.module.css";

const ParagraphTwo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    const paragraph = document.querySelector(`.${styles.textParagrafo2}`);
    if (paragraph) observer.observe(paragraph);

    return () => {
      if (paragraph) observer.unobserve(paragraph);
    };
  }, []);

  return (
    <div className={styles.paragrafo2}>
      <div className={styles.contentParagrafo2}>
        <div className={styles.containerImgParagrafo2}>
          <img className={styles.blusaAmarela} src="/blusaAmarela.jpg" alt="minha foto" />
        </div>
        <p
          className={`${styles.textParagrafo2} ${
            isVisible ? styles.paragrafoAnimadoAtivo : styles.paragrafoAnimadoDesativo
          }`}
          id="sobremim"
        >
          <span className={styles.titleParagrafo2}>
            Desenvolvedor <br />
            Full stack
          </span>
          Desenvolvimento de soluções tecnológicas:
          Ao longo da minha carreira, fui responsável por implementar e otimizar sistemas,
          atuando tanto no backend (Node.js, Java, APIs) quanto no frontend (React, Next.js),
          com foco em entregas rápidas e de qualidade.
        </p>
      </div>
    </div>
  );
};

export default ParagraphTwo;
