import React from 'react'
import styles from "./ParagraphOne.module.css"
const ParagraphOne = () => {
  return (
    <div className={styles.paragrafo1}>
    <div className={styles.subParagrafo}>
      <h2 className={styles.titleMain} id='home'>Bem-vindo(a)</h2>
      <p className={`${styles.textBoasVindas} ${styles.paragrafoAnimado}`}>
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
  )
}

export default ParagraphOne
