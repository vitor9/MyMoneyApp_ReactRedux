const INITIAL_STATE = { list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Utilizamos o operador spread(...) para poder replicar 
        // o estado atual e garantir tudo o que tinha antes que fique aqui.
        case 'BILLING_CYCLES_FETCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}