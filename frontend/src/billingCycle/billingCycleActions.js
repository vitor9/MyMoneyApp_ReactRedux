import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3000/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            // Quando esse post for concluido, ira iniciar a chamada callback
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                // Um dispatch de array faz parte do middleware: redux-mult
                // Ele percorre cada uma das acoes uma atras da outra e dispara uma por uma
                // Ele recebe uma/varias action
                .dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}