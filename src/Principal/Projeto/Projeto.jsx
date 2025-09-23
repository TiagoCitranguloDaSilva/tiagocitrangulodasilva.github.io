
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
            <h3>{dadosProjeto.nomeProjeto}</h3>
            <img src={dadosProjeto.linkImagem} alt="" />
            
            
        </div>
    )

}



export default Projeto;