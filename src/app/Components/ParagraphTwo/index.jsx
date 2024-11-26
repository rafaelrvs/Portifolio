import React from 'react'
import styles from "./ParagraphTwo.module.css"
const ParagraphTwo = () => {
  return (
   
    <div className={styles.paragrafo2}>
    <div className={styles.contentParagrafo2}>
      <div className={styles.containerImgParagrafo2}>
        <img className={styles.blusaAmarela} src="/blusaAmarela.jpg" alt="minha foto" />
      </div>
      <p className={`${styles.textParagrafo2} ${styles.paragrafoAnimado}`} id='sobremim'>
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
  )
}

export default ParagraphTwo
