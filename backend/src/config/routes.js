const express = require('express')

// Esta eh uma forma de passar parametros para um modulo no node
// na hora que formos exportar a funcao para algum lugar, passamos por parametro o modulo
module.exports = function(server) {

    // Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

}