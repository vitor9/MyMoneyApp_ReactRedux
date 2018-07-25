// Agrupa todos os cabecalhos de minhas abas
import React from 'react'

export default props => (
    <ul className='nav nav-tabs'>
        {props.children}
    </ul>
)