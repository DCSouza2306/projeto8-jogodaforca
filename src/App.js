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
    const [arrayConferir, setArrayConferir] = useState([]);
    const [conferirChute, setConferirChute] = useState("");

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
            const novasLetras = [...letraEscolhida, a]
            setLetraEscolhida(novasLetras)
            let novoArray = arrayConferir;
            if (novasLetras.includes('a') || novasLetras.includes('e') || novasLetras.includes('i') || novasLetras.includes('o') || novasLetras.includes('u') || novasLetras.includes('c')) {
                if (arrayConferir.includes('á')) {
                    novoArray = novoArray.filter((l) => l !== 'á');
                    novoArray = novoArray.filter((l) => l !== a);
                    setArrayConferir(novoArray);
                } else if (arrayConferir.includes('ã')) {
                    novoArray = novoArray.filter((l) => l !== 'ã');
                    novoArray = novoArray.filter((l) => l !== a);
                    setArrayConferir(novoArray);
                } else if (arrayConferir.includes('à')) {
                    novoArray = novoArray.filter((l) => l !== 'à');
                    novoArray = novoArray.filter((l) => l !== a);
                    setArrayConferir(novoArray);
                }else if (arrayConferir.includes('â')) {
                    novoArray = novoArray.filter((l) => l !== 'â');
                    novoArray = novoArray.filter((l) => l !== a);
                    setArrayConferir(novoArray);
                }  else if (arrayConferir.includes('é')) {
                    novoArray = novoArray.filter((l) => l !== 'é');
                    novoArray = novoArray.filter((l) => l !== a);
                    setArrayConferir(novoArray);
                } else if (arrayConferir.includes('ê')) {
                    novoArray = novoArray.filter((l) => l !== 'ê');
                    novoArray = novoArray.filter((l) => l !== a);
                    setArrayConferir(novoArray);
                } else if (arrayConferir.includes('í')) {
                    novoArray = novoArray.filter((l) => l !== 'í');
                    novoArray = novoArray.filter((l) => l !== a);
                    setArrayConferir(novoArray);
                } else if (arrayConferir.includes('ó')) {
                    novoArray = novoArray.filter((l) => l !== 'ó');
                    novoArray = novoArray.filter((l) => l !== a);
                    setArrayConferir(novoArray);
                } else if (arrayConferir.includes('ô')) {
                    novoArray = novoArray.filter((l) => l !== 'ô');
                    novoArray = novoArray.filter((l) => l !== a);
                    setArrayConferir(novoArray);
                }else if (arrayConferir.includes('ç')) {
                    novoArray = novoArray.filter((l) => l !== 'ç');
                    novoArray = novoArray.filter((l) => l !== a);
                    setArrayConferir(novoArray);
                } else if (arrayConferir.includes('ú')) {
                    novoArray = novoArray.filter((l) => l !== 'ú');
                    novoArray = novoArray.filter((l) => l !== a);
                    setArrayConferir(novoArray);
                }else {
                    novoArray = novoArray.filter((l) => l !== a);
                    setArrayConferir(novoArray);
                }
            } else {
                novoArray = novoArray.filter((l) => l !== a);
                setArrayConferir(novoArray);
            }


            if (novoArray.length === arrayConferir.length) {
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
        setPalavraEscolhida([...arrayPalavra]);
        setArrayConferir([...arrayPalavra]);
    }


    function imprimirPalavra() {
        console.log(arrayConferir);
        if(conferirChute===false){
            return (
                palavraEscolhida.map((a) => (<span className="letra-palavra perdeu">{a}</span>))
            )
        } else if (arrayConferir.length === 0 || conferirChute === true) {
            return (
                palavraEscolhida.map((a) => (<span className="letra-palavra ganhou">{a}</span>))
            )
        } else if (numeroErros < 6) {
            return (
                palavraEscolhida.map((a) => (arrayConferir.includes(a)) ? <span className="letra-palavra">_</span> : <span className="letra-palavra">{a}</span>)
            )
        } 

    }

    function chutarPalavra() {
        
        const palavraString = palavraEscolhida.join("");
        console.log(palavraChute);
        console.log(palavraString)

        if (palavraChute.localeCompare(palavraString)===0) {
            setConferirChute(true)
            setJogoHabilitado(false)
        } else {
            setConferirChute(false)
            setJogoHabilitado(false)
        }

    }

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <section>
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
                <input onChange={e => setPalavraChute(e.target.value)} value={palavraChute} />
                <button onClick={chutarPalavra}>Chutar</button>
            </div>

        </section>
    )
}

export default App