import "./Principal.css";
import { createContext } from 'react'
import Projeto from './Projeto/Projeto.jsx'


const contextoProjeto = createContext(null);

export {contextoProjeto};

function Principal(){

    const projetos = [
        {nomeProjeto: "Paciência", linkRepositorio: "https://github.com/TiagoCitranguloDaSilva/Paciencia", linkImagem: "/img/pacienciaBanner.jpg", descricao: "Um jogo de paciência"},
        {nomeProjeto: "21", linkRepositorio: "https://github.com/TiagoCitranguloDaSilva/21", linkImagem: "/img/21Banner.jpg", descricao: "Um jogo de 21"},
        // {linkRepositorio: "", linkImagem: "", linkGithubPages: "", descricao: ""},
    ];

   

    return(
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
            
            <div id="projetos">
                <h2>Projetos</h2>
                {projetos.map((projeto, key) => 
                    <contextoProjeto.Provider value={projeto} key={key}> 
                        <Projeto />
                    </contextoProjeto.Provider>
                )}
            </div>
        </main>
    )
}

export default Principal;
