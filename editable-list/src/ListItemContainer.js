import styled from "styled-components"

const Container = styled.div`
    font-size: 1em;
    padding: 1em;
    border: none;
    border-radius: 0px;
    display:flex;
    background-color: #232435;
    margin-bottom: 1px;
    color: #f4f0e5;
    
    &:first-child{
    border-radius: 0.2em 0.2em 0px 0px;
    }

    &:last-child{
    border-radius: 0px 0px 0.2em 0.2em ;
    }

    &:only-child{
        border-radius: 0.2em 0.2em 0.2em 0.2em ;    
    }
`
export const ListItemContainer = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>

    )
}