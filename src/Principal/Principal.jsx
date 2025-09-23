import "./Principal.css";
import { createContext } from 'react'
import Projeto from './Projeto/Projeto.jsx'


const contextoProjeto = createContext(null);

export { contextoProjeto };

function Principal() {
    const projetosArray = [
        [
            "Projetos reais",
            [
                {
                    nomeProjeto: "AZ Soluções",
                    linkRepositorio: "https://github.com/TiagoCitranguloDaSilva/AzSolucoes",
                    linkImagem: "/img/azSolucoesBanner.jpg"
                }
            ]
        ], [
            "Outros",
            [
                {
                    nomeProjeto: "SmartTask",
                    linkRepositorio: "https://github.com/TiagoCitranguloDaSilva/SmartTask",
                    linkImagem: "/img/SmartTaskBanner.jpg"
                }
            ]
        ], [
            "Jogos",
            [
                {
                    nomeProjeto: "Paciência",
                    linkRepositorio: "https://github.com/TiagoCitranguloDaSilva/Paciencia",
                    linkImagem: "/img/pacienciaBanner.jpg"
                }, {
                    nomeProjeto: "21",
                    linkRepositorio: "https://github.com/TiagoCitranguloDaSilva/21",
                    linkImagem: "/img/21Banner.jpg"
                }, {
                    nomeProjeto: "Pong",
                    linkRepositorio: "https://github.com/TiagoCitranguloDaSilva/Pong",
                    linkImagem: "/img/pongBanner.jpg",
                }, {
                    nomeProjeto: "Color Pattern",
                    linkRepositorio: "https://github.com/TiagoCitranguloDaSilva/ColorPattern",
                    linkImagem: "/img/colorPatternBanner.jpg"
                },
            ]
        ]
    ];
    // {linkRepositorio: "", linkImagem: "", linkGithubPages: ""},





    return (
        <main>
            <div id="sobre">
                <h2>Sobre</h2>
                <p>Me chamo Tiago Citrangulo da Silva, sou um estudante de programação que passa horas de seu dia estudando e aprimorando suas habilidades. Apaixonado por aprender, estou sempre trabalhando em um projeto novo e me desafiando a cada dia mais. Atualmente, meu foco principal é em desenvolvimento web, principalmente a parte de front-end, mas também possuo conhecimentos sobre back-end caso necessário.</p>
            </div>
            <div>
                <h2>Escolaridade/Cursos</h2>
                <ul>
                    <li>Curso de Informática para Internet integrado ao ensino médio pela ETEC João Belarmino (conclusão 12/2024)</li>
                    <li>Curso de Ciência da Computação pela UniFAJ(conclusão 12/2028)</li>
                </ul>
            </div>
            <div id="habilidades">
                <h2>Habilidades</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>MySQL</li>
                    <li>Python</li>
                    <li>Java</li>
                </ul>
            </div>
            <div id="idiomas">
                <h2>Idiomas</h2>
                <ul>
                    <li>Inglês Intermediário</li>
                </ul>
            </div>

            <div id="projetosContainer">
                <h2>Projetos</h2>
                <p>Aqui estão alguns projetos que desenvolvi, basta clicar em algum deles que você será redirecionado para o respectivo repositório GitHub</p>
                <div id="projetos">
                    {projetosArray.map((projetos, key1) =>
                        <section key={key1}>
                            <h3>{projetos[0]}</h3>
                            <div>
                                {projetos[1].map((projeto, key2) =>
                                    <contextoProjeto.Provider value={projeto} key={key2}>
                                        <Projeto />
                                    </contextoProjeto.Provider>
                                )}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Principal;
