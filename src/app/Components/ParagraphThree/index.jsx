"use client";
import React, { useEffect, useState } from "react";
import styles from "./ParagraphThree.module.css";

const ParagraphThree = () => {
  const imagens = ["/hack2.jpg", "/hackthon.png"];
  const [index, setIndex] = useState(0);
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

    const paragraph = document.querySelector(`.${styles.contentTextParagrafo3}`);
    if (paragraph) observer.observe(paragraph);

    return () => {
      if (paragraph) observer.unobserve(paragraph);
    };
  }, []);

  useEffect(() => {
    const cycleImage = () => {
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
      }, 7500);
    };

    const intervalId = setInterval(cycleImage, 7500);
    cycleImage();

    return () => clearInterval(intervalId);
  }, [imagens.length]);

  return (
    <div className={styles.paragrafo3} id="eventos">
      <div className={styles.containerContentParagrafo3}>
        <p
          className={`${styles.contentTextParagrafo3} ${
            isVisible ? styles.paragrafoAnimadoAtivo : styles.paragrafoAnimadoDesativo
          }`}
        >
          <span className={styles.h1text3}>
            Hackthon
            <span className={styles.h1text3sub}> Mogi das Cruzes</span>
          </span>
          No Hackathon do Alto Tietê Valley, minha equipe conquistou o 3º lugar com o projeto SAMIA,
          um chatbot desenvolvido para apoiar mães de primeira viagem durante o pré-natal e reduzir a mortalidade infantil.
          Utilizamos Next.js, TypeScript e ferramentas da AWS, como Bedrock e Transcribe, para criar uma solução eficiente.
          A experiência foi marcante, pois combinamos inovação tecnológica com impacto social.
          Foi uma grande oportunidade de aprendizado e crescimento profissional.
        </p>

        <div
          className={isVisible ? styles.containerImgHackAtivo : styles.containerImgHack}
        >
          <img
            src={imagens[index]}
            alt={`Imagem ${index + 1}`}
            className={styles.imagemHackathon}
          />
        </div>
      </div>
    </div>
  );
};

export default ParagraphThree;
