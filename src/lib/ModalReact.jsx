import React,{ useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as themes from './themes.js'
/**
 * Function to create Modulable Modal Component
 * @param {Boolean} param0-1
 * @param {CSSProperties} param7-8-9-10-11-12-15-16-18
 * @param {String} param2-3-4-5-6-13-14-17
 * @param {Function} param9
 * @returns {JSX Element}
 */
function ModalReact({isOpen, 
                     isOverlay,
                     themeName,
                     primary,
                     secondary,
                     thirdty,
                     fourthy,
                     styleModalContainer: customContainer,
                     mobileStyleModalContainer,
                     styleOverlay:customOverlay, 
                     styleContainerContent: customContainerContent,
                     mobileStyleContainerContent,
                     styleModalTitle: customModalTitle,
                     modalTitle,
                     contentModal, 
                     styleButton: customButton, 
                     mobileStyleButton,
                     textButton, 
                     styleContainerHeader: customContainerHeader, 
                     mobileStyleContainerHeader,
                     actionOnClose}){

    // Managed Mobile Media Queries
    const [mediaQueryMatch, setMediaQueryMatch] = useState(false)
        useEffect(() => {
            const handleResize = () => {
                setMediaQueryMatch(window.innerWidth <= 768)
            }
            handleResize()
            window.addEventListener('resize', handleResize)
            return () => {
                window.removeEventListener('resize', handleResize)
            }
    }, [])

    // Theme selected
    const selectedTheme = themes[themeName] || themes.defaultTheme

    // State for theme with button for :hover
    const [isButtonHovered, setIsButtonHovered] = useState(false)
    // Colours defined
    const colours = {backgroundContent:{primary}, colorText:{secondary},backgroundButton:'transparent', borderButton:`2px solid ${fourthy}`, colorTextButton:{secondary}, backgroundHover:{thirdty}, colorTextHover:{primary}, borderHeader:`2px solid  ${fourthy}`, headerColorText:{thirdty}, backGroundHeader:{fourthy}}

    // Default style for the modal with theme and colour background and mobile style
    let mergedStyleContainer = {
        ...selectedTheme.styleModalContainer,
        backgroundColor: colours.backgroundContent?.primary ?? selectedTheme.styleModalContainer?.backgroundColor,
        boxSadow: colours?.shadowColor ?? selectedTheme.styleModalContainer?.boxShadow,
        ...customContainer
      }
      if (mediaQueryMatch) {
        mergedStyleContainer = {
            ...mergedStyleContainer,
            ...selectedTheme.mobileStyleModalContainer,
            ...mobileStyleModalContainer
        }
    }
    // Default style Overlay
    const mergedStyleOverlay = {
        ...selectedTheme.styleOverlay,
        ...customOverlay
    }
    // Default style Modal title
    const mergedModalTitle = {
        ...selectedTheme.styleModalTitle,
        ...customModalTitle
    }
    // Default Modal Title
    const defaultModalTitle = ' '

    // Default style for container of the text content
    let mergedContainerContent = {
        ...selectedTheme.styleContainerContent,
        color: colours.colorText?.secondary ?? selectedTheme.styleContainerContent?.color,
        ...customContainerContent
    }
    if (mediaQueryMatch) {
        mergedContainerContent = {
            ...mergedContainerContent,
            ...selectedTheme.mobileStyleContainerContent,
            ...mobileStyleContainerContent
        }
    }
    // Default content text
    const defaultContentText = '{contentModal}'

    // Default style for container to close modal
    let mergedContainerHeader = {
        ...selectedTheme.styleContainerHeader,
        borderBottom : colours?.borderHeader ?? selectedTheme.styleContainerHeader?.borderBottom,
        color : colours.headerColorText?.thirdty ?? selectedTheme.styleContainerHeader?.color,
        ...customContainerHeader,
        backgroundColor:colours.backGroundHeader?.fourthy ??selectedTheme.styleContainerHeader?.backgroundColor,
    }
    if (mediaQueryMatch) {
        mergedContainerHeader = {
            ...mergedContainerHeader,
            ...selectedTheme.mobileStyleContainerHeader,
            ...mobileStyleContainerHeader
        }
    }
    // Default text button
    const defaultTextButton = 'X'
    // Default style for element button to close modal with hover style
    let mergedStyleButton = {
        ...selectedTheme.styleButton,
        border:colours?.borderButton ??selectedTheme.styleButton?.border,
        color:colours.colorTextButton?.secondary ?? selectedTheme.styleButton.color,
        ...customButton,
        ...(isButtonHovered && {
            ...selectedTheme.styleButtonHover,
            backgroundColor: colours.backgroundHover?.thirdty ?? selectedTheme.styleButtonHover?.backgroundColor,
            color: colours.colorTextHover?.primary ?? selectedTheme.styleButtonHover?.color,
          })
        }
        if (mediaQueryMatch) {
            mergedStyleButton = {
                ...mergedStyleButton,
                ...selectedTheme.mobileStyleButton,
                ...mobileStyleButton
            }
        }
    // Function to reset state button hover when clicked
    const handleHoverClick=()=>{
        setIsButtonHovered(false)
    }
    if(!isOpen){
        return null
    }
    return(
        <div>
            {isOverlay && <div style={mergedStyleOverlay}></div>}
            <div id="modalReact" style={mergedStyleContainer}>
                <div style={mergedContainerHeader}>
                    <div style={mergedModalTitle}>{modalTitle===undefined ? defaultModalTitle : modalTitle}</div>
                    <button style={mergedStyleButton} onClick={() => {actionOnClose(); handleHoverClick()}} 
                            onMouseOver={() => setIsButtonHovered(true)}
                            onMouseOut={() => setIsButtonHovered(false)}>
                        {textButton==='' || textButton===undefined ? defaultTextButton : textButton}
                    </button>
                </div>
                <div style={mergedContainerContent}>
                    {contentModal==='' || contentModal===undefined ? defaultContentText : contentModal}
                </div>
            </div>
        </div>
    )
}
ModalReact.defaultProps = {
    themeName: 'defaultTheme',
  }

ModalReact.propTypes = {
    isOpen: PropTypes.bool,
    themeName: PropTypes.string,
    primary:PropTypes.string,
    secondary:PropTypes.string,
    thirdty:PropTypes.string,
    fourthy:PropTypes.string,
    isOverlay: PropTypes.bool,
    styleModalContainer: PropTypes.object,
    mobileStyleModalContainer: PropTypes.object,
    styleOverlay: PropTypes.object,
    styleContainerContent: PropTypes.object,
    mobileStyleContainerContent: PropTypes.object,
    styleModalTitle: PropTypes.object,
    modalTitle: PropTypes.string,
    contentModal: PropTypes.string,
    styleButton: PropTypes.object,
    mobileStyleButton: PropTypes.object,
    textButton: PropTypes.string,
    styleContainerHeader: PropTypes.object,
    mobileStyleContainerHeader: PropTypes.object,
    actionOnClose: PropTypes.func
}

export default ModalReact