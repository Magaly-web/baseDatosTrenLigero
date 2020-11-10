'use strict'

var express = require('express');//carga express
var mmmaM45Controller = require('../../../controllers/smm/mayor/MMMA_M45');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM45Controller.getAllMaintenenceMMMA_M45);
api.post('/mmmaM45-save', mmmaM45Controller.createMaintenenceMMMA_M45);
api.put('/update-mmmaM45/:id', mmmaM45Controller.editMMMA_M45Data);
api.get('/get-history/:id', mmmaM45Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM45Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM45Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM45Controller.checkedApprovalByWorker);
api.get('/mmmaM45/:id', mmmaM45Controller.getMMMA_M45Data);

module.exports = api;//exporta el api