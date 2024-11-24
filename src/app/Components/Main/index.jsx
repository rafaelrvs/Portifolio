'use client';
import React, { useEffect, useState } from 'react';
import styles from "./Main.module.css";

const Main = () => {
  const [imgHack, setImgHack] = useState("hack2.png");

  useEffect(() => {
    const interval = setInterval(() => {
      setImgHack((prevImgHack) => (prevImgHack === "hackthon.png" ? "hack2.png" : "hackthon.png"));
    }, 3000); // Alterna a cada 3 segundos

    return () => {
      clearInterval(interval); // Limpa o intervalo quando o componente desmontar
    };
  }, []); // Apenas uma vez após a montagem do componente

  return (
    <main className={styles.main}>
      <div className={styles.paragrafo1}>
        <div className={styles.subParagrafo}>
          <h2 className={styles.titleMain} id='home'>Bem-vindo(a)</h2>
          <p className={styles.textBoasVindas}>
            Olá, sou Rafael Vieira, desenvolvedor Full-stack apaixonado por criar soluções digitais inovadoras.
            Combinando criatividade, agilidade e tecnologia de ponta,
            transformo ideias em realidades tecnológicas.
            Explore meu portfólio e descubra como posso contribuir para o seu projeto!
          </p>

          <div className={styles.containerBtnHome}>
            {/* Botão de baixar CV */}
            <a
              href="/Rafael_Vieira_CV.pdf"  // Caminho corrigido do arquivo PDF na pasta public
              download="Rafael_Vieira_CV.pdf" // Nome do arquivo que será baixado
            >
              <input className={styles.BaixarCV} value={"Baixar CV"} type="button" />
            </a>

            <input className={styles.MeusProjetos} value={"Meus projetos"} type="button" />
          </div>
        </div>

        <div className={styles.containerImg}>
          <img className={styles.imgAzul} src="/blusaAzul.jpg" alt="Minha foto" />
        </div>
      </div>
      {/* Paragrafo 2 */}
      <div className={styles.paragrafo2}>
        <div className={styles.contentParagrafo2}>
          <div className={styles.containerImgParagrafo2}>
            <img className={styles.blusaAmarela} src="/blusaAmarela.jpg" alt="minha foto" />
          </div>
          <p className={styles.textParagrafo2} id='sobremim'>
            <span className={styles.titleParagrafo2}>
              Desenvolvedor <br />
              Full stack
            </span>
            Desenvolvimento de soluções tecnológicas:
            Ao longo da minha carreira, fui responsável por implementar e otimizar sistemas,
            atuando tanto no backend (Node.js , Java, APIs) quanto no frontend (React, Next.js),
            com foco em entregas rápidas e de qualidade.
          </p>
        </div>
      </div>
      {/* Paragrafo 3 */}
      <div className={styles.paragrafo3} id='habilidades'>
        <div className={styles.containerContentParagrafo3}>
          <p className={styles.contentTextParagrafo3}>
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

          <div className={styles.containerImgHack}>
            <img className={styles.imgParagrafo} src={imgHack} alt="hack" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
