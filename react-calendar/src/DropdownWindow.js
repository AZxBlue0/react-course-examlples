import styled from "styled-components"

const TransparentBackground = styled.div`
    width: 100%;
    height: 100%;
    z-index:3;
    position:fixed;
    top: 0;
    left: 0;
    overflow: auto;
    background-color: rgba(0,0,0,0);
`
const WindowBody = styled.div`
    background-image: linear-gradient(#202126, #202126);
    padding: 20px;
    width: fit-content;
    box-shadow: 0px 4px 10px rgba(0,0,15, 0.5);
    border-radius: 8px;
    z-index: 4;
    position: absolute;
`

export const DropdownWindow = ({ children, shouldShow, onRequestClose }) => {
    return (
        <>
            {shouldShow && (
                <>
                    <WindowBody onClick={e => e.stopPropagation()}>
                        {children}
                    </WindowBody>
                <TransparentBackground onClick={onRequestClose} />
                </>
            )}</>
    )
}