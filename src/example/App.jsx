import ModalReact from "../lib/ModalReact"
import React,{ useState } from "react"

function App(){
    const [isOpen,setIsOpen]=useState(false)
    return(
        <>
            <button onClick={() => setIsOpen(true)}>Ouvrir</button>
            <ModalReact 
            isOpen={isOpen}
            isOverlay={false}
            themeName={'headerTheme'}
            primary={'#ededed'}
            styleContainerHeader={{borderBottom:'2px solid #000'}}
            styleButton={{border:'none'}}
            modalTitle={'{modalTitle}'}
            actionOnClose={function () {setIsOpen(false)}}
            />
        </>
    )
}
export default App