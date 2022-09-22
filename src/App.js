import forca0 from "./img/forca0.png"
import {useState} from "react"
import palavras from "./palavras"


function App() {
    const [jogoHabilitado, setJogoHabilitado] = useState(false);
    const [palavraEscolhida, setPalavraEscolhida] = useState([]);
    const [letraEscolhida, setLetraEscolhida] = useState([]);
    
    function imprimirLetras(a,index){
        return(
            <span key={index} className={(jogoHabilitado)?"letra habilitado":"letra"} onClick={()=>selecionarLetra(a)}>{a}</span>
        )
    }

    function selecionarLetra(a){
        if(jogoHabilitado){
            setLetraEscolhida([...letraEscolhida, a]);
        } else{
            alert("o jogo ainda não iniciou")
        }

    }

    function habilitarJogo(){
        const iniciaJogo = true;
        setJogoHabilitado(iniciaJogo);
        const palavraSelecionada = palavras[Math.floor(Math.random()*palavras.length)]
        const arrayPalavra = [];

        for(let i=0; i<palavraSelecionada.length;i++){
            arrayPalavra.push(palavraSelecionada[i]);
        }
        setPalavraEscolhida([...arrayPalavra])
        console.log(arrayPalavra);
    }

    function imprimirPalavra(){
        return(
            <span className="letra-palavra">_</span>
        )
    }

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <>
            <div className="imagem-botao">
                <img className="forca" src={forca0} alt="imagem da forca" />
                <button className="botao-escolher" onClick={habilitarJogo}>Escolher Palavra</button>
                <div className="palavra-jogo">{palavraEscolhida.map((a)=>(letraEscolhida.includes(a))? <span className="letra-palavra">{a}</span>:<span className="letra-palavra">_</span>)}</div>
            </div>


            <div className="painel-letras">
                {alfabeto.map(imprimirLetras)}

            </div>

        </>
    )
}

export default App