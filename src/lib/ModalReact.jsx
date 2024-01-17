import React from 'react'
/**
 * Function to create Modulable Modal Component
 * @param {Boolean} param0-1
 * @param {CSSProperties} param2-3-4-5-6-8
 * @param {String} param4-5-7
 * @param {Function} param9
 * @returns {JSX Element}
 */
function ModalReact({isOpen, 
                     isOverlay,
                     styleModalContainer: customContainer,
                     styleOverlay:customOverlay, 
                     styleContainerContent: customContainerContent,
                     styleModalTitle: customModalTitle,
                     modalTitle,
                     contentModal, 
                     styleButton: customButton, 
                     textButton, 
                     styleContainerHeader: customContainerHeader, 
                     actionOnClose}){

    // Default style for the modal
    const defaultStyleModalContainer = {position: 'fixed', 
                                        top: '50%' ,
                                        left: '50%' ,
                                        transform: 'translate(-50%, -50%)', 
                                        backgroundColor:'#000',
                                        color:'#FFF', 
                                        display:'flex', 
                                        flexDirection:'column',
                                        zIndex:'10'}
    const mergedStyleContainer = {
        ...defaultStyleModalContainer,
        ...customContainer
      }
    // Default style Overlay
    const defaultStyleOverlay = {position:'absolute',
                                 top:'0',
                                 left:'0',
                                 width:'100%',
                                 height:'100%',
                                 backgroundColor:'#ededed',
                                 opacity:'0.5',
                                 zIndex:'1'}
    const mergedStyleOverlay = {
        ...defaultStyleOverlay,
        ...customOverlay
    }
    // Default style Modal title
    const defaultStyleModalTitle = { color:'#FFF', 
                                     padding:'0.1rem', 
                                     fontSize:'0.8rem'}
    const mergedModalTitle = {
        ...defaultStyleModalTitle,
        ...customModalTitle
    }
    // Default Modal Title
    const defaultModalTitle = ' '

    // Default style for container of the text content
    const defaultStyleContainerContent = {padding:'0.6rem 1rem'}
    const mergedContainerContent = {
        ...defaultStyleContainerContent,
        ...customContainerContent
    }
    // Default content text
    const defaultContentText = 'Votre texte ici...'

    // Default style for container to close modal
    const defaultStyleContainerHeader = {display:'flex',
                                        justifyContent:'space-between',
                                        alignItems:'center',
                                        width:'100%'}
    const mergedContainerHeader = {
        ...defaultStyleContainerHeader,
        ...customContainerHeader
    }
    // Default text button
    const defaultTextButton = 'X'
    // Default style for element button to close modal
    const defaultStyleButton = {backgroundColor:'transparent', 
                                border:'none',
                                color:'#FFF',
                                cursor:'pointer'}
    const mergedStyleButton = {
        ...defaultStyleButton,
        ...customButton
    }



    if(!isOpen){
        return null
    }
    return(
        <>
        {isOverlay && <div style={mergedStyleOverlay}></div>}
        <div id="modalReact" style={mergedStyleContainer}>
             <div style={mergedContainerHeader}>
                <div style={mergedModalTitle}>{modalTitle===undefined ? defaultModalTitle : modalTitle}</div>
                <button style={mergedStyleButton} onClick={actionOnClose}>
                    {textButton==='' || textButton===undefined ? defaultTextButton : textButton}
                </button>
            </div>
            <div style={mergedContainerContent}>
                {contentModal==='' || contentModal===undefined ? defaultContentText : contentModal}
            </div>
        </div>
        </>
    )
}

export default ModalReact