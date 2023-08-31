import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props)=>{
        //Estado - Hooks
        //useState
    //const [nombreVariable, funcionActualiza] = useState(contenido de la variable)
   
/*     const [mostrar, actualizarVista] = useState(true);
    const manejarClick= ()=>{
        console.log("Mostrar o Ocultar form",!mostrar);
        actualizarVista(!mostrar);
    }
 */
    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src='/img/add.png' alt="add"  onClick={props.cambiarVista} />

    </section>
}

export default MiOrg;