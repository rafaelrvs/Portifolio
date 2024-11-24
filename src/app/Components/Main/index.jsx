'use client';
import React, { useEffect, useState } from 'react';
import styles from "./Main.module.css";

const Main = () => {
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
    <main className={styles.main}>
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
      {/* Paragrafo 2 */}
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
      {/* Paragrafo 3 */}
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

      <div className={styles.paragrafo5} id='educacao'>
        <h1>Educação</h1>
    <div className={styles.containerMainCircle}>
        <div className={styles.containerCircle}>
        </div>
        <div className={styles.ContentEducacao}>
            <strong>2022 – 2024</strong>
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <span>Universidade de Mogi das Cruzes - jun de 2022 a jun de 2024</span>
            <span>Graduação em Análise e Desenvolvimento de Sistemas
            </span>
        </div>
    </div>
    <div className={styles.containerMainCircle}>
        <div className={styles.containerCircle}>
        </div>
        <div className={styles.ContentEducacao}>
            <strong>2023</strong>
            <h3>RocketSeat Java</h3>
            <span>
            O curso de Java abordou fundamentos essenciais da linguagem, como estruturas de controle de fluxo (condicionais e laços), orientação a objetos (classes, objetos, herança, polimorfismo, encapsulamento e abstração), além de técnicas de manipulação de exceções e tratamento de erros. Também foram exploradas coleções (List, Set, Map) para gerenciar dados, e conceitos de programação funcional com lambdas e streams. O curso ainda incluiu a construção de aplicações Java com foco em boas práticas de codificação e design patterns. Ao final, o aluno adquiriu a capacidade de criar sistemas robustos e eficientes utilizando a linguagem Java.
            </span>
        </div>
    </div>
    <div className={styles.containerMainCircle}>
        <div className={styles.containerCircle}>
        </div>
        <div className={styles.ContentEducacao}>
            <strong>2023</strong>
            <h3>Origamid React</h3>
           <span>O curso de React abordou diversos conceitos importantes, como o uso de webhooks para integrar funcionalidades externas, o useEffect para gerenciar efeitos colaterais e atualizações de estado, a estrutura JSX para construir interfaces de usuário com HTML e JavaScript, e o useContext para gerenciar o estado global de forma mais eficiente em aplicações React.</span>
        </div>
    </div>
    <div className={styles.containerMainCircle}>
        <div className={styles.containerCircle}>
        </div>
        <div className={styles.ContentEducacao}>
            <strong>2022</strong>
            <h3>Alura React</h3>
            <span>O curso de conceitos básicos de React abrangeu os fundamentos essenciais para o desenvolvimento de interfaces de usuário dinâmicas. Foi ensinado como usar **componentes** para dividir a aplicação em partes reutilizáveis e como utilizar **props** para passar dados entre eles. Também foram abordados os **states**, que permitem gerenciar e atualizar informações de forma eficiente dentro dos componentes. O curso explicou o uso do **JSX**, uma sintaxe que mistura JavaScript com HTML, e a importância do **rendering condicional** para exibir conteúdo de acordo com o estado da aplicação. Além disso, foram apresentados conceitos de **event handling** para interagir com o usuário e **hooks** como o **useState** e **useEffect**, que ajudam a gerenciar estado e efeitos colaterais de maneira funcional. Ao final, o aluno foi capaz de construir pequenas aplicações interativas com React.</span>
        </div>
    </div>
</div>



      <div className={styles.paragrafo6}>
        <h1>Meus Projetos</h1>

      </div>

    </main>
  );
}

export default Main;
