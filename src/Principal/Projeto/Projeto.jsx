
import { useContext } from 'react'
import {contextoProjeto} from '../Principal.jsx'
import "./Projeto.css";

function Projeto(){

    function handleClick(){
        window.open(dadosProjeto.linkRepositorio, "_blank");
    }

    const dadosProjeto = useContext(contextoProjeto);

    return(
        <div className='projeto' onClick={handleClick}>
            <img src={dadosProjeto.linkImagem} alt="" />
            <div>
                <h3>{dadosProjeto.nomeProjeto}</h3>
                <p>{dadosProjeto.descricao}</p>
            </div>
        </div>
    )

}



export default Projeto;