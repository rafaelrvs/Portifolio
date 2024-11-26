"use client"
import React, { useEffect, useState } from 'react'
import styles from "./ParagraphThree.module.css"
const ParagraphThree = () => {
  // Array de URLs de imagens para a seção Hackathon
  const imagens = [
    '/hack2.jpg',
    '/hackthon.png' // Adicione outras imagens aqui
  ];

 // Estado para armazenar o índice atual da imagem
 const [index, setIndex] = useState(0);
 // Estado para controlar se a imagem deve ser visível
 const [isVisible, setIsVisible] = useState(true);

 useEffect(() => {
   // Função para controlar a exibição e desaparecimento da imagem
   const cycleImage = () => {
     // Primeiramente, tornar visível
     setIsVisible(true);

     // Após 3 segundos, esconder com animação
     setTimeout(() => {
       setIsVisible(false);
     }, 7000);

     // Alterar a imagem após a animação de desaparecimento
     setTimeout(() => {
       setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
     }, 7500);
   };

   // Iniciar ciclo e repetir a cada 6.5 segundos (3s visível + 3s de ciclo)
   const intervalId = setInterval(cycleImage, 7500);

   // Iniciar imediatamente
   cycleImage();

   return () => clearInterval(intervalId);
 }, [imagens.length]);

 // Observer para parágrafos
 useEffect(() => {
   const observer = new IntersectionObserver((entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         // Adiciona classe de animação ao aparecer
         entry.target.classList.add(styles.ativo);
       } else {
         // Remove a classe ao sair da tela
         entry.target.classList.remove(styles.ativo);
       }
     });
   }, { threshold: 0.1 });

   // Seleciona todos os elementos <p>
   const paragraphs = document.querySelectorAll('p');
   paragraphs.forEach((p) => observer.observe(p));

   // Limpa o observer quando o componente é desmontado
   return () => {
     paragraphs.forEach((p) => observer.unobserve(p));
   };
 }, []);


  return (
    <div className={styles.paragrafo3} id='eventos'>
    <div className={styles.containerContentParagrafo3}>
      <p className={`${styles.contentTextParagrafo3} ${styles.paragrafoAnimado}`}>
        <span className={styles.h1text3}>
          Hackthon
          <span className={styles.h1text3sub}> Mogi das Cruzes</span>
        </span>
        No Hackathon do Alto Tietê Valley,
        minha equipe conquistou o 3º lugar com o projeto SAMIA,
        um chatbot desenvolvido para apoiar mães de primeira viagem durante o pré-natal e reduzir a mortalidade infantil.
        Utilizamos Next.js, TypeScript e ferramentas da AWS,
        como Bedrock e Transcribe, para criar uma solução eficiente. A experiência foi marcante, pois combinamos inovação tecnológica com impacto social. Foi uma grande oportunidade de aprendizado e crescimento profissional.
      </p>

      <div className={isVisible ? styles.containerImgHackAtivo : styles.containerImgHack}>
        <img
          src={imagens[index]}
          alt={`Imagem ${index + 1}`}
          className={styles.imagemHackathon}
        />
      </div>
    </div>
  </div>

  )
}

export default ParagraphThree
