'use client';
import React, { useEffect, useState } from 'react';
import styles from "./Main.module.css";
import ParagraphOne from '../ParagraphOne';
import ParagraphTwo from '../ParagraphTwo';
import ParagraphThree from '../ParagraphThree';
import ParagraphFour from '../ParagraphFour';
import ParagraphFive from '../ParagraphFive';
import ParagraphSix from '../ParagraphSix';

const Main = () => {




  return (
    <main className={styles.main}>
      <ParagraphOne />
      <ParagraphTwo />
      <ParagraphThree />
      <ParagraphFour />
      <ParagraphFive />
      <ParagraphSix/>

    </main>
  );
}

export default Main;
