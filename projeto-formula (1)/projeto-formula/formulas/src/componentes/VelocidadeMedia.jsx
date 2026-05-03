import estilo from './VelocidadeMedia.module.css'
import { useState } from 'react'

function VelocidadeMedia(){
    const [deslocamento, setDeslocamento] = useState('')
    const [tempo, setTempo] = useState('')
    const [velocidade, setVelocidade] = useState('')

    function calcular(){
        const D = Number(deslocamento)
        const T = Number(tempo)
        if (T <= 0){
            setVelocidade('O tempo não pode ser igual ou menor que zero!')
            return
        }
        setVelocidade((D / T).toFixed(2))
    }

    return (
        <div className={estilo.card}>
            <div className={estilo.conta}>
                <h1>Velocidade Média</h1>
                <h3>Coeficientes</h3>

                <input
                    type="number"
                    placeholder='D'
                    value={deslocamento}
                    onChange={(e) => setDeslocamento(e.target.value)}
                />
                <input
                    type="number"
                    placeholder='T'
                    value={tempo}
                    onChange={(e) => setTempo(e.target.value)}
                />
                <button onClick={calcular} className=''>Calcular</button>
                <p>V: {velocidade} m/s</p>
                
            </div>
            <div className={estilo.explicacao}>
                <p>
                 A velocidade média é uma grandeza física que mede a rapidez com que um objeto se desloca
                    ao longo de um percurso, considerando apenas o deslocamento total e o tempo total, sem levar
                    em conta variações de velocidade ou pausas durante o trajeto.
                    <br/>
                    <br/>
                    Sendo:
                     <br/>
                    V - velocidade em metros por segundos
                    <br/>
                    D - deslocamento em metros
                    <br/>
                    T - tempo em segundos
                    <br/>
                    <br/>
                    Fórmula:
                    <br/>
                    V = D / T
                </p>
            </div>
        </div>
    )
}

export default VelocidadeMedia