import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/header.js';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';
function App() {
  const [mostrarFormulario,actualizarVista] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Programación",
    foto:"https://github.com/JohanDs1.png",
    nombre:"Johan Bermeo",
    puesto:"Desarrollador",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Devops",
    foto:"https://github.com/JohanDs1.png",
    nombre:"Johan Bermeo",
    puesto:"Desarrollador",
    fav: false
},
{
  id: uuid(),
  equipo: "Front End",
  foto:"https://github.com/JohanDs1.png",
  nombre:"Johan Bermeo",
  puesto:"Desarrollador",
  fav: true
},
{
  id: uuid(),
  equipo: "Móvil",
  foto:"https://github.com/JohanDs1.png",
  nombre:"Johan Bermeo",
  puesto:"Desarrollador",
  fav: false
}
]) //Cuando queremos que ahi entre un arreglo, en este caso de colaboradores, vamos a poner vacio el array



const [equipos,actualizarEquipos] = useState([
  {
    id: uuid(),
    titulo:'Programación',
    colorPrimario:'#57C278',
    colorSecundario:'#D9F7E9'
  },
  {
    id: uuid(),
    titulo:'Front End',
    colorPrimario:'#82CFFA',
    colorSecundario:'#E8F8FF'
  },
  {
    id: uuid(),
    titulo:'Data Science',
    colorPrimario:'#A6D157',
    colorSecundario:'#F0F8E2'
  },
  {
    id: uuid(),
    titulo:'Devops',
    colorPrimario:'#E06B69',
    colorSecundario:'#FDE7E8'
  },
  {
    id: uuid(),
    titulo:'UX y Diseño',
    colorPrimario:'#DB6EBF',
    colorSecundario:'#FAE9F5'
  },
  {
    id: uuid(),
    titulo:'Móvil',
    colorPrimario:'#FFBA05',
    colorSecundario:'#FFF5D9'
  },
  {
    id: uuid(),
    titulo:'Innovación y Gestión',
    colorPrimario:'#FF8A29',
    colorSecundario:'#FFEEDF'
  }])
  //Ternario ==> {condicion ? seMuestra : NoSeMuestra}
  const cambiarVista = () =>{
    actualizarVista(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador", colaborador)
    //Spread operator su sintaxis es [...nombre array de donde copiar,array lleno]
    actualizarColaboradores([...colaboradores,colaborador])
  }
  //Eliminar Colaborador
  const eliminarColaborador =(id) =>{
    console.log("Eliminar colaborador",id)
    const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
  //ctrl+d  para seleccionar todas las coincidencias y reemplazar en todas
  //Actualizar color de Equipo
  const actualizarColor = (color,id) =>{
    console.log("Actualizar: ", color,id)
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear Equipo
  const crearEquipo =(nuevoEquipo) =>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo,id: uuid()}]) //se crea copia y añade id//estar dentro de corchetes porque equipos es un array
  }

  const like = (id)=>{
    console.log("like: ",id)

    const colaboradoresActualizados  = colaboradores.map((colaborador)=>{
      if( colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)//actulizamos colaboradores con useState de colaboradores
  }

  return (
    <div>
    <Header />
    {/*mostrarFormulario === true ? <Formulario /> : <></>*//*primera forma de condicion */}
    {
    mostrarFormulario && <Formulario equipos={equipos.map((equipo)=>
      equipo.titulo)} 
    registrarColaborador={registrarColaborador}
    crearEquipo={crearEquipo}
    />}
    <MiOrg cambiarVista={cambiarVista} />
    {
      equipos.map((equipo)=><Equipo 
      datos={equipo} 
      key={equipo.titulo}
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like={like}
      />)
    }

    <Footer />
    </div>
  )
  }

export default App
