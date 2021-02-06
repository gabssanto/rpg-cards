import styled from 'styled-components';

interface TextInputWrapperProps {
    type: string;
    color?: string;
};

export const TextInputWrapper = styled.div<TextInputWrapperProps>`
    display: flex;
    flex-direction: column;
    padding: 8px 16px;
    background-color: ${props => (props.type)}
`;

export const TextInput = styled.input`
    margin: 8px 0;
`;

export const AddPlayer = styled.a`
    color: white;
    background-color: #ff6e67;
    padding: 8px 16px;
`;

export const Container = styled.div`
    
`;

export const Card = styled.div`
    margin: 20px 0;
    background-color: #aaa;
`;