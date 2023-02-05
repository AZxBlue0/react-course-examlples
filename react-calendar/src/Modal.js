import styled from "styled-components"

const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    z-index:3;
    position:fixed;
    overflow: auto;
    background-color: rgba(0,0,15,0.5);
`
const ModalBody = styled.div`
    background-image: linear-gradient(#202126, #202126);
    margin: 10% auto;
    padding: 20px;
    width: 50%;
    box-shadow: 0px 4px 10px rgba(0,0,15, 0.5);
`

export const Modal = ({ children, shouldShow, onRequestClose }) => {
    return (
        <>
            {shouldShow && (
                <ModalBackground onClick={onRequestClose}>
                    <ModalBody onClick={e => e.stopPropagation()}>
                        {children}
                        <button onClick={onRequestClose}>Hide Modal</button>
                    </ModalBody>
                </ModalBackground>
            )}</>
    )
}