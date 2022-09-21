import palavras from "./palavras"
import forca0 from "./img/forca0.png"
import {useState} from "react"


function App() {
    const [letraHabilitada, setLetraHabilitada] = useState(false)
    
    function imprimirLetras(a){
        return(
            <span className={(letraHabilitada)?"letra habilitado":"letra"} onClick={selecionarLetra}>{a}</span>
        )
    }

    function selecionarLetra(){
        if(letraHabilitada){
            alert("O jogo iniciou")
        } else{
            alert("o jogo ainda não iniciou")
        }

    }

    function habilitarJogo(){
        const jogoHabilitado = true;
        setLetraHabilitada(jogoHabilitado);
    }

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <>
            <div className="imagem-botao">
                <img className="forca" src={forca0} alt="imagem da forca" />
                <button className="botao-escolher" onClick={habilitarJogo}>Escolher Palavra</button>
            </div>

            <div className="painel-letras">
                {alfabeto.map(imprimirLetras)}

            </div>

        </>
    )
}

export default App