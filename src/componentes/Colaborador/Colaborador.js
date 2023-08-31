import './Colaborador.css'
import {AiFillCloseCircle, AiOutlineHeart,AiFillHeart } from 'react-icons/ai' //importa el nombre del icono de la pagina react icons


const Colaborador = (props) =>{
    const {nombre,puesto,foto,equipo,id, fav} = props.datos
    const {color, eliminarColaborador,like} = props
    return <div className='colaborador'>
        <AiFillCloseCircle className='eliminar' onClick={()=>eliminarColaborador(id)} />
        <div className='encabezado' style={{backgroundColor:color}} 
/*el estilo lo ponemos asi y las llaves que son moradas son del style,debemos poner otras llaves y poner que se va a cambiar */> 
            <img src={foto} alt={nombre} />
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <AiFillHeart  color='red' onClick={()=>like(id)}/> : <AiOutlineHeart onClick={()=>like(id)} /> }
            
        </div>
    </div>
}

export default Colaborador