import { useState } from 'react'
import estilo from './AreaTrapezio.module.css'

function AreaTrapezio(){
  const [B, setB] = useState('')
  const [b, setb] = useState('')
  const [altura, setaltura] = useState('')
  const [Area, setArea] = useState('')

  function calcular(){
    const baseM = Number(B)       
    const basem = Number(b)      
    const alt = Number(altura)    
    setArea((((baseM + basem) * alt) / 2).toFixed(2))  
  }

  return(
    <div className={estilo.card}>
      
      <div className={estilo.conta}>
        <h1>Área do Trapézio</h1>
        <h3>Coeficientes</h3>
        <input
          type="number"
          placeholder='B'
          value={B}
          onChange={(e) => setB(e.target.value)}
        />
        <input
          type="number"
          placeholder='b'
          value={b}
          onChange={(e) => setb(e.target.value)}   
        />
        <input
          type="number"
          placeholder='h'
          value={altura}
          onChange={(e) => setaltura(e.target.value)} 
        />
        <button onClick={calcular}>Calcular</button>
        <p>A: {Area} m²</p>
      </div>
      <div className={estilo.explicacao}>
        <p>
          Um trapézio é um quadrilátero que possui pelo menos um par de lados paralelos. Os lados são chamados
          de bases: a base maior (B) e a base menor (b). Os outros dois lados, que não são paralelos, são
          conhecidos como lados oblíquos. A altura (h) do trapézio é a distância perpendicular entre as
          duas bases.
          <br/>
                    <br/>
                    Sendo:
                    <br/>
                    A - área é em metros ao quadrado
                    <br/>
                    B - base maior
                    <br/>
                    b - base menor
                    <br/>
                    h - altura
                    <br/>
                    <br/>
                    Fórmula:
                    <br/>
                    A = ((B+b)*h)/2
        </p>
      </div>
    </div>
  )
}

export default AreaTrapezio