import forca0 from "./img/forca0.png"
import forca1 from "./img/forca1.png"
import forca2 from "./img/forca2.png"
import forca3 from "./img/forca3.png"
import forca4 from "./img/forca4.png"
import forca5 from "./img/forca5.png"
import forca6 from "./img/forca6.png"
import { useState } from "react"
import palavras from "./palavras"


function App() {
    const [jogoHabilitado, setJogoHabilitado] = useState(false);
    const [palavraEscolhida, setPalavraEscolhida] = useState([]);
    const [letraEscolhida, setLetraEscolhida] = useState([]);
    const [numeroErros, setNumeroErros] = useState(0);
    const [imagemForca, setImagemForca] = useState(forca0);
    const [palavraChute, setPalavraChute] = useState("");

    function imprimirLetras(a, index) {
        if (jogoHabilitado) {
            return (
                <button key={index} disabled={(letraEscolhida.includes(a)) ? "disabled" : ""} className={(letraEscolhida.includes(a)) ? "letra" : "letra habilitado"} onClick={() => selecionarLetra(a)}>{a}</button>
            )
        } else {
            return (
                <button key={index} className="letra" onClick={() => selecionarLetra(a)}>{a}</button>
            )
        }

    }

    function selecionarLetra(a) {
        if (jogoHabilitado) {
            setLetraEscolhida([...letraEscolhida, a]);
            if (!palavraEscolhida.includes(a)) {
                const adicionaErro = numeroErros + 1
                if (adicionaErro <= 6) {
                    setNumeroErros(numeroErros + 1);
                    mudarImagem(adicionaErro);
                } else {
                    setJogoHabilitado(false);
                }

            }
        } else {
            alert("o jogo ainda não iniciou")
        }

    }

    function mudarImagem(e) {
        switch (e) {
            case 1:
                setImagemForca(forca1);
                break;
            case 2:
                setImagemForca(forca2);
                break;
            case 3:
                setImagemForca(forca3);
                break;
            case 4:
                setImagemForca(forca4);
                break;
            case 5:
                setImagemForca(forca5);
                break;
            case 6:
                setImagemForca(forca6);
                break;
            default:

        }

    }

    function habilitarJogo() {
        setJogoHabilitado(true);
        const palavraSelecionada = palavras[Math.floor(Math.random() * palavras.length)];
        console.log(palavraSelecionada);
        const arrayPalavra = [];

        for (let i = 0; i < palavraSelecionada.length; i++) {
            arrayPalavra.push(palavraSelecionada[i]);
        }
        setPalavraEscolhida([...arrayPalavra])
    }

    function imprimirPalavra() {
        if (letraEscolhida.toString() === palavraEscolhida.toString()) {
            return (
                palavraEscolhida.map((a) => (<span className="letra-palavra ganhou">{a}</span>))
            )
        } else if (numeroErros < 6) {
            return (
                palavraEscolhida.map((a) => (letraEscolhida.includes(a)) ? <span className="letra-palavra">{a}</span> : <span className="letra-palavra">_</span>)
            )
        } else {
            return (
                palavraEscolhida.map((a) => (<span className="letra-palavra perdeu">{a}</span>))
            )
        }

    }

    function chutarPalavra(){
    
       if(palavraChute.localeCompare(palavraEscolhida.toString() === 0)){
        alert("Você acertouuuu");
       }

    }

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <section>
            <p>{palavraEscolhida}</p>
            <div className="imagem-botao">
                <img className="forca" src={imagemForca} alt="imagem da forca" />
                <button className="botao-escolher" onClick={habilitarJogo}>Escolher Palavra</button>
                <div className="palavra-jogo">{imprimirPalavra()}</div>
            </div>


            <div className="painel-letras">
                {alfabeto.map(imprimirLetras)}
            </div>

            <div className="input">
                <p>Já sei a palavra!</p>
                <input onChange={e => setPalavraChute(e.target.value)} value={palavraChute}/>
                <button onClick={chutarPalavra}>Chutar</button>
            </div>

        </section>
    )
}

export default App