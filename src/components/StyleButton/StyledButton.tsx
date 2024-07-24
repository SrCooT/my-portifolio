import { styled } from '@mui/material';
import { ReactNode } from 'react';

interface StyledButtonProps{
    children:ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({children}) => {

    const StyledButton  = styled("button")(({theme}) => ({
        backgroundColor:"transparent",
        border:`1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width:"100%",
        color: theme.palette.primary.contrastText,
        display:"inline-flex",
        justifyContent:"center",
        gap:"10pxp",
        '&:hover': {
            backgroundColor: theme.palette.secondary.contrastText
        }
   
    }));
    return (
      <>
    <StyledButton> {children} </StyledButton>
      </>
    )
  }
  
  export default StyledButton
