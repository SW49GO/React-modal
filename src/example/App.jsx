import ModalReact from "../lib/ModalReact"
import { useState } from "react"

function App(){
    const [isOpen,setIsOpen]=useState(false)
    return(
        <>
            <button onClick={() => setIsOpen(true)}>Ouvrir</button>
            <ModalReact 
            isOpen={isOpen}
            isOverlay={false}
            styleModalContainer={{borderRadius:10, backgroundColor:'#ededed', overflow:'hidden', boxShadow:'10px 5px 5px #00F'}}
            styleContainerClose={{borderBottom:'1px solid #505b19', backgroundColor:"#93ad18"}}
            styleModalTitle={{color:"#505b19", paddingLeft:'1rem'}}
            styleContainerContent={{fontSize:'25px', padding:'2rem', color:"#000", marginBottom:'2rem'}}
            contentModal={'Employee Created!'}
            styleButton={{color:'#00F', padding:5, border:'2px solid black',borderRadius:5,  boxShadow:'5px 2px 2px #00F', position:'absolute', bottom:'0.5rem', left:'40%'}}
            textButton={'Fermer'}
            actionOnClose={function () {setIsOpen(false)}}
            />
        </>
    )
}
export default App