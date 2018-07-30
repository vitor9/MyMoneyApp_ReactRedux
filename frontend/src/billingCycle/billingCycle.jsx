import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// Imports de arquivos do projeto
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { selectTab, showTabs } from '../common/tab/tabActions'
import { create } from './billingCycleActions'

import List from '../billingCycle/billingCycleList'
import Form from './billingCycleForm'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
        // Liste o ID das tabelas que deseja que apareça no header.
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>

                        <TabsContent>
                            <TabContent id='tabList'>
                                <h1>Lista</h1>
                                <List />
                            </TabContent>
                            
                            <TabContent id='tabCreate'>
                                <h1>Incluir</h1>
                                <Form onSubmit={this.props.create} />
                            </TabContent>
                            
                            <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ 
    selectTab, showTabs, create }, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)