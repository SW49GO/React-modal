import ModalReact from "../lib/ModalReact"
import React,{ useState } from "react"

function App(){
    const [isOpen,setIsOpen]=useState(false)
    return(
        <>
            <button onClick={() => setIsOpen(true)}>Open</button>
            <ModalReact 
            isOpen={isOpen}
            isOverlay={false}
            themeName={'headerAndButtonTheme'}
            primary={'#ededed'}
            styleContainerHeader={{borderBottom:'2px solid #000'}}
            styleButton={{border:'none'}}
            modalTitle={'{modalTitle}'}
            textButton='Close'
            actionOnClose={function () {setIsOpen(false)}}
            />
        </>
    )
}
export default App