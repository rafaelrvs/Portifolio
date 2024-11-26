import React from 'react'
import styles from "./ParagraphSix.module.css"
import Link from 'next/link'
const ParagraphSix = () => {
  return (

    <div className={styles.paragrafo6} id='projetos'>
      <h1 className={styles.titleParagrafo6}>Meus Projetos</h1>
      <div className={styles.main}>

        <div className={styles.contentProject}>
          <span>Pega o bus ai</span>
          <div className={styles.containerProject}>
            <img className={styles.imgProjetos} src="/Pega o bus ai.png" alt="Pega o bus" />
          </div>
          <p className={styles.Descricao}>sistema que permite identificar os horários dos ônibus que partem dos terminais da cidade de Mogi das Cruzes. Desenvolvi o frontend em React e utilizei Node.js no backend, além de integrar o sistema com o Gemini para fornecer respostas humanizadas e assertivas.

            O software surgiu da necessidade de facilitar o acesso aos horários dos ônibus, oferecendo uma plataforma centralizada com respostas rápidas e assertivas.</p>
          <Link className={styles.btnConsulta}
            href={"https://github.com/rafaelrvs/onibus"}

            target="_blank"
            rel="noopener noreferrer"

          >Consultar</Link>
        </div>
        <div className={styles.contentProject}>
          <span>SamiA</span>

          <div className={styles.containerProject}>
            <img className={styles.imgProjetos} src="/logoSamia.jpg" alt="Samia" />
          </div>
          <p className={styles.Descricao}>Desenvolvimento da SAMIA (Sistema de Amparo a Mulher ) um chatbot que auxilia no pré-natal apoiando as mães de primeira viagem e acompanhando o seu estado de maternidade e ajuda na diminuição da mortalidade infantil, utilizando as ferramentas de desenvolvimento como:
            next.js
            typescript
            aws - Bedrock
            aws - transcrybe</p>
          <Link className={styles.btnConsulta}
            target="_blank"
            rel="noopener noreferrer"
            href={"https://github.com/Giovani-SantAna-Pedroso/hackathon-mogi"}>Consultar</Link>

        </div>
        <div className={styles.contentProject}>
          <span>Adote uma Arvore</span>
          <div className={styles.containerProject}>
            <img className={styles.imgProjetos} src="/adote.png" alt="Samia" />
          </div>
          <p className={styles.Descricao}>
            Projeto desenvolvido em parceria com a Suzano, com o objetivo de criar um software inovador para promover a remoção de carbono da atmosfera.
          </p>
          <Link className={styles.btnConsulta}
            target="_blank"
            rel="noopener noreferrer"
            href={"https://suzando-desafio-carbono.vercel.app/aboutPage.html"}>Consultar</Link>

        </div>

      </div>


    </div>
  )
}

export default ParagraphSix
