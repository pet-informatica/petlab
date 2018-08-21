import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Menus from "./Menus";
import Footer from "./Footer";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";

export default class App extends Component {
  render() {
    const sections = [
      {
        id: "sobre",
        header: "SOBRE",
        floated: "left",
        image:
          "https://res.cloudinary.com/dkbuneg9h/image/upload/v1532479276/PETLab_kfyqbc.svg",
        content: (
          <p>
            O PETLab nasce de uma necessidade dos alunos do CIn se envolverem
            com atividades de pesquisa em laboratórios e grupos da UFPE. Serão
            selecionados 12 alunos dos cursos de Ciência de Computação,
            Engenharia da Computação e Sistemas de Informação, a partir do 5º
            período. Formando três times, desenvolverão atividades de pesquisa
            em nos laboratórios e grupos de pesquisa parceiros. O programa terá
            um total de 240 horas, sendo necessárias 20h de dedicação semanal.
            Os projetos desenvolvidos durante o programa são relacionados com as
            áreas de pesquisa dos laboratórios parceiros.
          </p>
        )
      },
      {
        id: "lika",
        header: "LIKA",
        floated: "right",
        image:
          "https://res.cloudinary.com/dkbuneg9h/image/upload/v1532543554/LIKA_kz4zdv.png",
        content: (
          <p>
            O Lika, Laboratório de Imunopatologia Keizo Asami, trabalha em
            várias linhas de pesquisa relacionadas à saúde e tem como missão
            "Formar recursos humanos de qualidade e desenvolver métodos,
            sistemas e produtos biotecnológicos associados a diagnóstico e
            métodos terapêuticos humano e animal, visando a melhor qualidade de
            vida do todos". Um dos projetos que os alunos terão contato é o
            HealthDrones, que usa drones para guiar pessoas em espaços públicos
            com controle de trajeto baseado em algoritmos genéticos. Você pode
            saber mais sobre o LIKA em:{" "}
            <a href="https://www.ufpe.br/lika/">https://www.ufpe.br/lika/</a>
          </p>
        )
      },

      {
        id: "spg",
        header: "SPG",
        floated: "left",
        image:
          "https://res.cloudinary.com/dkbuneg9h/image/upload/v1532543554/SPG_blw5hs.jpg",
        content: (
          <p>
            O SPG é o Grupo de Produtividade de Software, que investiga e
            desenvolve ferramentas, técnicas e processos para aumentar níveis de
            produtividade de software sem comprometer fatores de qualidade de
            software e da vida dos desenvolvedores. Você pode saber mais sobre o
            SPG na
            <a href="http://twiki.cin.ufpe.br/twiki/bin/view/SPG">
              {" "}
              SPG Wiki
            </a>{" "}
            e no{" "}
            <a href="https://www.youtube.com/watch?v=xGJnfGNKPsc&t=">
              Mundo CIn{" "}
            </a>.
          </p>
        )
      },

      {
        id: "voxar",
        header: "VOXAR",
        floated: "right",
        image:
          "https://res.cloudinary.com/dkbuneg9h/image/upload/v1532543756/VOXAR_vq2vjq.png",
        content: (
          <p>
            O Voxar Labs realiza projetos de Pesquisa, Desenvolvimento e
            Inovação em três grandes áreas, que são visualização, rastreamento e
            interação natural, todos convergindo para um grande campo
            tecnológico que é a realidade aumentada. Estes são realizados em
            colaboração com instituições acadêmicas e de pesquisa, agências
            governamentais e parceiros do setor industrial, no Brasil e no
            exterior. Para mais informações você pode consultar o{" "}
            <a href="http://www.cin.ufpe.br/~voxarlabs/"> site</a> e também
            assistir ao{" "}
            <a href="https://www.youtube.com/watch?v=Ca7i9N3-Izw"> Mundo Cin</a>{" "}
            do Voxar.
          </p>
        )
      },
      {
        id: "pet",
        header: "PET-INFORMÁTICA",
        floated: "left",
        image:
          "https://res.cloudinary.com/dkbuneg9h/image/upload/v1521674491/Logo-PET-Simbolo_qagowa.png",
        content: (
          <p>
            O <a href="https://pet.cin.ufpe.br">PET-Informática</a> é um grupo
            formado por 18 alunos e tutorado por uma professora engajado em
            atividades que buscam impactar positivamente alunos do{" "}
            <a href="http://www2.cin.ufpe.br/site/index.php">CIn</a> melhorando
            a experiência da graduação e promovendo sucesso acadêmico, além de
            atrair pessoas para os cursos de tecnologia. Dentro das nossas
            atividades destacam-se a{" "}
            <a href="https://opei.cin.ufpe.br">
              OPEI - Olimpíada Pernambucana de Informática
            </a>{" "}
            que mobiliza todo o estado de Pernambuco trazendo alunos de ensino
            fundamental e médio para resolver problemas de lógica, matemática e
            programação visando atrair estes alunos para os cursos de
            tecnologia; o{" "}
            <a href="https://pet-informatica.github.io/programa-de-ferias">
              Curso de Férias
            </a>
            que aproxima a comunidade ao CIn onde anualmente, nas férias de
            verão, promovemos um curso de extensão em programação com objetivo
            de disseminar o conhecimento de programação tanto para alunos de
            ensino médio quanto para alunos de outros cursos de graduação; o
            <a href="https://pet.cin.ufpe.br/hacka">HackaPET</a> que busca
            motivar alunos do início do curso aumentando seu engajamento com
            programação. E agora nasce o PETLab, buscando aproximar alunos na
            reta final dos cursos de CIn de pesquisa e estabelecendo contatos
            com áreas da computação de uma forma que vai além das disciplinas.
          </p>
        )
      },
      {
        id: "edital",
        header: "EDITAL",
        floated: "right",
        image:
          "",
        content: (
          <p>
            Para ver o edital, acesse o link: <a href="https://goo.gl/z14sxW" title="edital"/>
          </p>
        )
      }
      ,
      {
        id: "inscricoes",
        header: "INSCRIÇÕES",
        floated: "right",
        image:
          "",
        content: (
          <p>
            Para se inscrever, acesso o link: <a href="https://goo.gl/rQkAkK" title="edital"/>
          </p>
        )
      }
    ];

    return (
      <div>
        <div className="index-page">
          <Logo />
          <div className="index-navbar">
            <Container text>
              <Navbar />
            </Container>
          </div>
          <Container text>
            <Menus sections={sections} />
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
