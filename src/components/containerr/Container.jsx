//Revisar dando erro
import React from 'react';
type ContainerProps ={
    styles: React.CSSProperties
}


export const Container = ({styles}:ContainerProps) => {
    return (
        <div style={styles}>
            Passando estilo por props 
        </div>
    )
} 