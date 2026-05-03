import VelocidadeMedia from '../componentes/VelocidadeMedia'
import Densidade from '../componentes/Densidade'
import AreaTrapezio from '../componentes/AreaTrapezio'
import estilo from './Inicial.module.css'

function Inicial(){
    return (
        <div className={estilo.container}>
            <h1>AVALIAÇÃO DE PW2 E PAM1</h1>
            <h3>Gabriela Belome Tomé</h3>
            
            <VelocidadeMedia />
            <br/>
            <Densidade />
            <br/>
            <AreaTrapezio />
        </div>
    )
}

export default Inicial