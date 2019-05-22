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
            O PETLab é um projeto organizado em uma parceria do PET com laboratórios de pesquisas 
            e desenvolvimento da UFPE (Nessa edição teremos a presença dos laboratórios 
            VOXAR, SPG e LIKA) visando entregar uma experiência de vivência aos alunos de 
            graduação nas áreas correlacionadas a cada um dos laboratórios envolvidos. 
            Durante o programa cada um dos participantes terá a oportunidade de passar um 
            mês em cada laboratório desenvolvendo pesquisas e projetos com a tutoria e 
            orientação de profissionais dessa área de atuação, providenciando ao estudante 
            um maior aprofundamento na área e abrindo novos horizontes de possibilidades de atuação.
            Em sua segunda edição serão selecionados 12 alunos dos cursos de Ciência de Computação,
            Engenharia da Computação e Sistemas de Informação, a partir do 3º
            período. Formando três times, desenvolverão atividades de pesquisa
            em nos laboratórios e grupos de pesquisa parceiros. O programa requer 
            20h de dedicação semanal com periodo de duração a ser definido entre 
            os labs.
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
            <a target="_blank" href="https://www.ufpe.br/lika/">https://www.ufpe.br/lika/</a>
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
            <a target="_blank" href="http://twiki.cin.ufpe.br/twiki/bin/view/SPG">
              {" "}
              SPG Wiki
            </a>{" "}
            e no{" "}
            <a target="_blank" href="https://www.youtube.com/watch?v=xGJnfGNKPsc&t=">
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
            <a target="_blank" href="http://www.cin.ufpe.br/~voxarlabs/"> site</a> e também
            assistir ao{" "}
            <a target="_blank" href="https://www.youtube.com/watch?v=Ca7i9N3-Izw"> Mundo Cin</a>{" "}
            do Voxar.
          </p>
        )
      },
      {
        id: "relatos",
        header: "RELATOS",
        floated: "center",
        content: (
          <p>
            "Eu estava no penúltimo período da graduação em engenharia da computação, 
            ainda não sabia em que área ia fazer meu TCC, queria ingressar no mestrado 
            mas assim como o TCC não sabia a área. Esse foi o principal motivo por ter 
            me interessado pelo PetLab. O programa iria me fazer ter experiência em três 
            laboratórios diferentes com áreas de pesquisas diferentes e assim seria muito 
            mais fácil fazer minha escolha e conhecer orientadores para alcançar meus interesses.
            <br/><br/>
            Com o PetLab pude descobrir como é feito a pesquisa no Voxar Labs, conhecer o 
            SPG e aprender de engenharia de software e descobrir o quanto de tecnologia e 
            computação o Lika se envolve em seus trabalhos.
            <br/><br/>
            Vejo que os alunos do CIn demoram muito para conhecer os laboratórios, e assim, 
            se engajar em suas respectivas áreas. Em outros centros isso é bem diferente. 
            Por exemplo no Lika, que recebe alunos ainda no primeiro período do curso de graduação. 
            Isso pra mim é o principal ponto de contribuição do PetLab.
            <br/><br/>
            Minha experiência no programa começou no SPG, onde aprendi sobre mineração e visualização 
            de dados aplicado em pesquisa para melhorar a produtividade de software. Os resultados 
            obtidos em um mês podem dar início de um trabalho bem maior como um mestrado ou doutorado.
            <br/><br/>
            Em seguida fui para o Lika e conheci as diversas pesquisas do laboratório que envolvem 
            tecnologia de várias áreas diferentes: robótica, inteligência artificial, ciência dos 
            dados, entre outras. Praticamente tive a liberdade de expor qual área da computação 
            queria trabalhar e os pesquisadores do laboratório conseguiam associar isto a algum 
            projeto que eles possuem. Assisti seminários de biologia, apresentei seminários de 
            aprendizagem de máquina (área que escolhi trabalhar no laboratório) para que em conjunto 
            com os pesquisadores e o restante do meu grupo, pudéssemos encontrar um ponto de encontro 
            e desenvolver algo com biotecnologia.
            <br/><br/>
            No Voxar Labs, o último laboratório que passei no programa, aprendi como é feita a 
            pesquisa científica no laboratório e metodologias de levantamento bibliográfico que 
            vou utilizar em minhas próximas pesquisas. Aprendi sobre visão computacional, realidade 
            aumentada e desenvolvimento mobile. Gostei bastante do laboratório, do que faziam e 
            como faziam.
            <br/><br/>
            Ao final do programa tinha decidido que queria pesquisar mais sobre realidade virtual 
            e aumentada, decidi continuar no Voxar Labs, participei do processo seletivo e fui 
            selecionado para estágio no laboratório. Hoje sou membro do Voxar e pretendo seguir 
            para o mestrado no laboratório.
            <br/><br/>
            O PetLab além de atender o que eu pretendia inicialmente, me proporcionou outras 
            experiências como trabalho em equipe, conhecer profissionais excelentes, 
            responsabilidades a nível de estágio, prática em programação de diferentes 
            áreas e reconhecimento por todo o trabalho desenvolvido.
            <br/><br/>
            Recomendo bastante o programa para quem quer conhecer mais de como a tecnologia pode 
            ser aplicada em diferentes áreas e quer continuar explorando ainda mais após o término 
            do programa."
          </p>
        )
      },
      {
        id: "pet",
        header: "PET-INFORMÁTICA",
        floated: "left",
        image:
          "https://res.cloudinary.com/dkbuneg9h/image/upload/v1554506920/Clypeasteroida_k7h4kl.svg",
        content: (
          <p>
            O <a target="_blank" href="https://pet.cin.ufpe.br">PET-Informática</a> é um grupo
            formado por 18 alunos e tutorado por uma professora engajado em
            atividades que buscam impactar positivamente alunos do{" "}
            <a target="_blank" href="http://www2.cin.ufpe.br/site/index.php">CIn</a> melhorando
            a experiência da graduação e promovendo sucesso acadêmico, além de
            atrair pessoas para os cursos de tecnologia. Dentro das nossas
            atividades destacam-se a{" "}
            <a target="_blank" href="https://opei.cin.ufpe.br">
              OPEI - Olimpíada Pernambucana de Informática
            </a>{" "}
            que mobiliza todo o estado de Pernambuco trazendo alunos de ensino
            fundamental e médio para resolver problemas de lógica, matemática e
            programação visando atrair estes alunos para os cursos de
            tecnologia; o{" "}
            <a target="_blank" href="https://pet-informatica.github.io/programa-de-ferias">
              Curso de Férias
            </a>
            que aproxima a comunidade ao CIn onde anualmente, nas férias de
            verão, promovemos um curso de extensão em programação com objetivo
            de disseminar o conhecimento de programação tanto para alunos de
            ensino médio quanto para alunos de outros cursos de graduação; o
            <a target="_blank" href="https://pet.cin.ufpe.br/hacka">HackaPET</a> que busca
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
            Para ver o edital, <a target="_blank" href="https://drive.google.com/file/d/1uHFul1BfMvbETgP-2eTD8noJeJv9eWNC/view?usp=sharing" title="edital">clique aqui.</a>
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
            Para se inscrever, acesso o link: <a target="_blank" href="https://forms.gle/FeeZfTkhUZmTdJ3U8" title="inscrições">https://forms.gle/FeeZfTkhUZmTdJ3U8</a>
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
