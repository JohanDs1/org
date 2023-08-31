import './Equipo.css'
import Colaborador from '../Colaborador/Colaborador'
import hexToRgba from 'hex-to-rgba';

const Equipo = (props)=>{
    //Destructuracion
    //const {variables que hay en el objeto} = de donde de props.datos
    const {colorPrimario,colorSecundario,titulo,id} = props.datos
    const estiloTitulo = {borderColor:colorPrimario}
    const estiloEquipos = {backgroundColor: hexToRgba(colorPrimario,0.4)}
    const {colaboradores, eliminarColaborador,actualizarColor,like} = props

 
    
    
    return <>
    { colaboradores.length > 0 && <section className="equipo" style={estiloEquipos}>
        <input 
            type='color'
            className='input-color'
            value={hexToRgba(colorPrimario,0.4)}
            onChange={(evento)=>{
                actualizarColor(evento.target.value , id)
            }}
        
        />


        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboladores">
            {
                colaboradores.map((colaborador,index)=><Colaborador 
                datos={colaborador} 
                key={index}
                color={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
                />)

            } 
        </div>
    </section>
     }</>
}

export default Equipo;