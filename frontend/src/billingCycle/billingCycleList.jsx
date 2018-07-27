import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './billingCycleActions'

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList()
    }
    
    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{ bc.name }</td>
                <td>{ bc.month }</td>
                <td>{ bc.year }</td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}
// Este metodo recebe por parametro um estado e vai retornar um objeto
// que o objeto eh o mapeamento do que eu quero colocar dentro das propriedades dentro
// do nosso componente atual(billingCycleList) e onde no estado este dado vai estar presente
// para que eu jogue nas propriedades. Do lado direito deste objeto, vai ser os valores
// que vao ser colocados na propriedade do componente.
const mapStateToProps = state => ({ list: state.billingCycle.list })

// Dispatch eh quem dispara a acao para os reducers. Com ele, fazemos o bind
// de nosso action creator
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)