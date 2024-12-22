import { styled } from '@mui/material';
import React from 'react';
import { ReactNode } from 'react';

interface StyledButtonProps{
    children:ReactNode
    onClick: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ({children,onClick}) => {

    const StyledButton  = styled("button")(({theme}) => ({
        backgroundColor:"transparent",
        border:`1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "5px",
        textDecoration:"none",
        padding: "5px 10px",
        width:"100%",
        color: theme.palette.primary.contrastText,
        display:"inline-flex",
        justifyContent:"center",
        gap:"10px",
        cursor:"pointer",
        '&:hover': {
            backgroundColor: theme.palette.secondary.contrastText
        }
    }));
    return (
      <>
    <StyledButton onClick={onClick}> {children} </StyledButton>
      </>
    )
  }
  
  export default StyledButton
