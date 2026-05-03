import estilo from './Densidade.module.css'
import { useState } from 'react'

function Densidade(){
    const [massa, setMassa] = useState('')
    const [volume, setVolume] = useState('')
    const [densidade, setDensidade] = useState('')

    function calcular(){
        const M = Number(massa)
        const V = Number(volume)
        if (V <= 0){
            setDensidade('O volume não pode ser igual ou menor que zero!')
            return
        }
        setDensidade((M / V).toFixed(2))
    }

    return (
        <div className={estilo.card}>
            <div className={estilo.conta}>
                <h1>Densidade</h1>
                <h3>Coeficientes</h3>
                <input
                    type="number"
                    placeholder='M'
                    value={massa}
                    onChange={(e) => setMassa(e.target.value)}
                />
                <input
                    type="number"
                    placeholder='V'
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                />
                <button onClick={calcular}>Calcular</button>
                <p>D: {densidade} kg/m³</p>
            </div>
            <div className={estilo.explicacao}>
                <p>
                    A densidade é uma propriedade da matéria que relaciona a massa de uma substância ao seu volume, sendo 
                    fundamental para a identificação e caracterização de materiais na química.
                    <br/>
                    <br/>
                    Sendo:
                    <br/>
                    D - densidade é em quilogramas por metros cúbicos
                    <br/>
                    M - massa em quilograma
                    <br/>
                    V - volume em metros cúbicos
                    <br/>
                    <br/>
                    Fórmula: 
                    <br/> D = M / V
                </p>
            </div>
        </div>
    )
}

export default Densidade