'use strict'

var express = require('express');//carga express
var mmmaM61Controller = require('../../../controllers/smm/mayor/MMMA_M61');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM61Controller.getAllMaintenenceMMMA_M61);
api.post('/mmmaM61-save', mmmaM61Controller.createMaintenenceMMMA_M61);
api.put('/update-mmmaM61/:id', mmmaM61Controller.editMMMA_M61Data);
api.get('/get-history/:id', mmmaM61Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM61Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM61Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM61Controller.checkedApprovalByWorker);
api.get('/mmmaM61/:id', mmmaM61Controller.getMMMA_M61Data);

module.exports = api;//exporta el api