import Frase from "./Frase"
import SayMyName from "./SayMyName"
import Pessoa from "./Pessoa"
function HellWorld(){
    return (
        <div>
            <h1> Meu primeiro Componente</h1>        
            <SayMyName nome ="Matheus"/>
            <Pessoa 
            nome ="Emanue" 
            idade ="23" 
            profissao="Programador"
            foto ="https://via.placeholder.com/150"
            />
            </div>
    )
}
export default HellWorld
