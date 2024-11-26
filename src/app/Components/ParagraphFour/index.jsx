import React from 'react'
import styles from "./ParagraphFour.module.css"
const ParagraphFour = () => {
  return (
    <div className={styles.paragrafo4} id='habilidades'>
    <h1 className={styles.titleParagrafo}>Habilidades</h1>
    <div className={styles.containerHabilidades}>
      <div className={styles.front}>
        <p className={styles.titleContainer}>Front-end</p>
        <p className={styles.contentContainerHabilidade}>HTML, CSS, JAVASCRIPT,
          React, Next.js
        </p>

      </div>
      <div className={styles.back}>
        <p className={styles.titleContainer}>Back-end</p>
        <p className={styles.contentContainerHabilidade}>Java, Node.js </p>

      </div>
      <div className={styles.banco}>
        <p className={styles.titleContainer}>Banco de dados</p>
        <p className={styles.contentContainerHabilidade}>JPostgreSQL, MongoDB</p>

      </div>
    </div>
  </div>
  )
}

export default ParagraphFour
