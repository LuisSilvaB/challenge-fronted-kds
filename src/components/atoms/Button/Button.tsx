import React from 'react'
import { ButtonContainer } from './Button.styles';

interface ButtonProps {
    text?: string;
    onClick?: () => void;
    children?: React.ReactNode; 
    background: string;
    top?:string; 
    bottom?:string;
    right?:string;
    left?:string; 
    position:string;
    width?:string;  
} 

const Button:React.FC<ButtonProps> = ({text, onClick, children, background, position, top, bottom , right, left, width}) => {
  return (
    <ButtonContainer onClick={onClick} backbround={background} position={position} top = {top} bottom = {bottom} right = {right} left = {left} width={width}>
        {text?text: children }
    </ButtonContainer>
  )
}

export default Button; 