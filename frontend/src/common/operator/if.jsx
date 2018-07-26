// Componente simples para nao ter que misturar 
// JavaScript dentro de nossa funcao render
import React from 'react'

export default props => {
    // Se o props.text for vdd...
    if (props.test) {
        // Retorne todos os componentes filhos que foram passados
        // que estao dentro do if        
        return props.children
    }
    else {
        return false
    }
}