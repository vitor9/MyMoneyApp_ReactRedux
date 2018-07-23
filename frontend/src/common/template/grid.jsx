import React, { Component } from 'react'

export default class Grid extends Component {

    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

         // Vai ser inserido as colunas tomando base o parametro dessa funcao
        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`

        return classes
    }

    render() {
        // Se a qt de cols nao for fornecida, por padrao vai ser 12.
        const gridClasses = this.toCssClasses(this.props.cols || '12' )
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}