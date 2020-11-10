'use strict'

var express = require('express');//carga express
var mmmaM32Controller = require('../../../controllers/smm/mayor/MMMA_M32');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM32Controller.getAllMaintenenceMMMA_M32);
api.post('/mmmaM32-save', mmmaM32Controller.createMaintenenceMMMA_M32);
api.put('/update-mmmaM32/:id', mmmaM32Controller.editMMMA_M32Data);
api.get('/get-history/:id', mmmaM32Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM32Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM32Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM32Controller.checkedApprovalByWorker);
api.get('/mmmaM32/:id', mmmaM32Controller.getMMMA_M32Data);

module.exports = api;//exporta el api