    import { useState } from 'react';
    import './Formulario.css';
    import Campo from '../CampoTexto/Campo';
    import ListaOpciones from '../ListaOpciones/ListaOpciones.js';
    import Boton from '../Boton/Boton';
    import Colaborador from '../Colaborador/Colaborador';
    const Formulario = (props) =>{
        const [nombre,setNombre] = useState("")
        const [puesto,setPuesto] = useState("")
        const [foto,setFoto] = useState("")
        const [equipo,actualizarEquipo] = useState("")

        const [titulo,setTitulo] = useState("")
        const [color,setColor] = useState("")

       
        const {registrarColaborador,crearEquipo} = props


        const manejarEnvio = (evento)=>{
            evento.preventDefault();
            let datosAenviar = {
                nombre:nombre,
                puesto:puesto,
                foto:foto,
                equipo:equipo
            }
            registrarColaborador(datosAenviar)
            }

        const manejarNewEquip = (e) =>{
            e.preventDefault();
            crearEquipo({titulo,colorPrimario: color})
        }    

        return <section className='formulario'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <Campo 
                titulo= "Nombre" 
                placeholder="Ingresar nombre"  
                required
                valor={nombre}
                actualizarValor={setNombre}
                />
                <Campo
                titulo="Puesto" 
                placeholder="Ingresar puesto"  
                required
                valor={puesto}
                actualizarValor={setPuesto}
                />
                <Campo
                titulo="Foto"  
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto}
                actualizarValor={setFoto}
                />
                <ListaOpciones  
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos} 
                />
                <Boton>
                Crear
                </Boton>
            </form>
            <form onSubmit={manejarNewEquip}>
                <h2>Rellena el formulario para crear el equipo</h2>
                <Campo
                titulo= "Titulo" 
                placeholder="Ingresar Titulo"  
                required
                valor={titulo}
                actualizarValor={setTitulo}
                />
                <Campo
                titulo="Color" 
                placeholder="Ingresar el color en Hex"  
                required
                valor={color}
                actualizarValor={setColor}
                type="color"
                />
                <Boton>Registrar Equipo</Boton>
            </form>
        </section>
    }

    export default Formulario;