# Modal React components created using `create-react-app` by SW49GO

## Presentation :
This is a reusable React component that allows you to display a customizable Modal window in your application.

The component is TypeScript compatible and includes a type definition file (ModalReact.d.ts) for an improved development experience. In a TypeScript project, the TypeScript compiler will automatically use this definition file.

### Examples Custom style :
<img src="https://raw.githubusercontent.com/SW49GO/React-modal/master/public/assets/image.jpg" alt="modal default"/>

## Installing the package in your project:
```bash
npm i modal-react-sw49go
```

## Imported the component into your project:
```
import ModalReact from 'modal-react-sw49go'
import { useState } from 'react'

function App(){
    const [isOpen,setIsOpen]=useState(false)
    
    return(
        <>
            <button onClick={() => setIsOpen(true)}>Ouvrir</button>

            <ModalReact 
            isOpen={isOpen}
            isOverlay={true}
            styleModalContainer={{borderRadius:10, backgroundColor:'#c9db6f', overflow:'hidden', boxShadow:'10px 5px 5px #505b19'}}
            styleContainerHeader={{borderBottom:'1px solid #505b19', backgroundColor:"#93ad18"}}
            styleModalTitle={{color:"#505b19", paddingLeft:'1rem'}}
            modalTitle={'RHnet application'}
            styleContainerContent={{fontSize:'20px', padding:'2rem', color:"#000"}}
            contentModal={'Employee Created!'}
            styleButton={{fontWeight: 'bold', color:'#505b19'}}
            textButton={'x'}
            actionOnClose={function () {setIsOpen(false)}}
            />
        </>
    )
}
export default App

```

# Using the different component options (Props):

- 'isOpen' (Boolean) : Show the Modal or not
- 'isOverlay'  (Boolean) : Show Overlay or not
- 'styleOverlay'  (CssProperties) : Style to use for Overlay
- 'styleModalContainer'  (CssProperties) : Style to use for global Modal container 
- 'styleContainerHeader'  (CssProperties) : Style to use for Header Modal container
- 'styleModalTitle' (CssProperties) : Style to use for Title container
- 'modalTitle'  (String) : Title you want to display in Header Modal
- 'styleButton'  (CssProperties) : Style to use for button to close the Modal
- 'textButton'  (String) : Text you want to use in close button
- 'actionOnClose'  (Function) : Function to use with the close button is clicked
- 'styleContainerContent'  (CssProperties) : Style to use for container of Content Modal
- 'modalContent'   (String) : Text you want to display in the Content Modal

## Some properties have default style configurations to allow visualization of the Modal :

- 'styleOverlay' : {position:'absolute', top:'0', left:'0', width:'100%', height:'100%', backgroundColor:'#ededed', opacity:'0.5', zIndex:'1'}
- 'styleModalContainer' : {position: 'fixed', top: '50%' , left: '50%' , transform: 'translate(-50%, -50%)'backgroundColor:'#000',color:'#FFF', display:'flex', flexDirection:'column',zIndex:'10'}
- 'styleContainerHeader' : {display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}
- 'styleModalTitle' :  { color:'#FFF', padding:'0.1rem', fontSize:'0.8rem'}
- 'modalTitle': ' '
- 'styleButton' : {backgroundColor:'transparent', border:'none', color:'#FFF', cursor:'pointer'}
-  'textButton' : 'X'
- 'styleContainerContent' : {padding:'0.6rem 1rem'}
- 'modalContent' : 'Votre texte ici...'


