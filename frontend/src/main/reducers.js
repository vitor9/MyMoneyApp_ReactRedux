// Este arquivo possui todos os Reducers da aplicacao
import { combineReducers } from 'redux'
// Apelidamos o objeto reducer que se encontra nas bibliotecas redux-form p/ nao ficar generico
import { reducer as formReducer } from 'redux-form'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer
})

export default rootReducer