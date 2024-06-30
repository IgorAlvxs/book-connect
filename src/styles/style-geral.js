import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    background-color: '#fff';
    align-items: center;
    justify-content: center;
    padding: 20px;
`;


const MeuText = styled.Text`
    font-size: ${props => props.fontSize || 18 };
    color: ${props => props.cor || '#1a1a1a' };
`;

export {
    Container,
    MeuText
}