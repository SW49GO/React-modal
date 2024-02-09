import * as React from 'react'

// Declaration of the different typings of the Component for compatibility with Typescrypt users

interface ModalReactProps {
  isOpen: boolean;
  isOverlay: boolean;
  themeName: string;
  primary:string;
  secondary:string;
  thirdty:string;
  fourthy:string;
  styleOverlay?:React.CSSProperties;
  styleModalTitle?:React.CSSProperties;
  modalTitle: string;
  styleModalContainer?: React.CSSProperties;
  mobileStyleModalContainer?:React.CSSProperties;
  styleContainerContent?: React.CSSProperties;
  mobileStyleContainerContent?:React.CSSProperties;
  contentModal: string;
  styleButton?: React.CSSProperties;
  mobileStyleButton?: React.CSSProperties;
  textButton?: string;
  styleContainerHeader?: React.CSSProperties;
  mobileStyleContainerHeader?:React.CSSProperties;
  actionOnClose?: () => void
}

declare const ModalReact: React.FunctionComponent<ModalReactProps>

export default ModalReact