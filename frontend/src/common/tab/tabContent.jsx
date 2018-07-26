import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class TabContent extends Component {
    render() {
        // Se a aba selecionada for igual a ID
        // O conteudo que vai ser renderizado eh igual ao conteudo selecionado 
        const selected = this.props.tab.selected === this.props.id
        return (
            // Classe CSS para indicar que o conteudo esta ativo
            <div id={this.props.id}
                className={`tab-pane ${selected ? 'active' : ''}`}>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })
export default connect(mapStateToProps)(TabContent)