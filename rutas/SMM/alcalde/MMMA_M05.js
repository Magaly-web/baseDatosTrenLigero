'use strict'

var express = require('express');//carga express
var mmmaM05Controller = require('../../../controllers/smm/mayor/MMMA_M05');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM05Controller.getAllMaintenenceMMMA_M05);
api.post('/mmmaM05-save', mmmaM05Controller.createMaintenenceMMMA_M05);
api.put('/update-mmmaM05/:id', mmmaM05Controller.editMMMA_M05Data);
api.get('/get-history/:id', mmmaM05Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM05Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM05Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM05Controller.checkedApprovalByWorker);
api.get('/mmmaM05/:id', mmmaM05Controller.getMMMA_M05Data);

module.exports = api;//exporta el api