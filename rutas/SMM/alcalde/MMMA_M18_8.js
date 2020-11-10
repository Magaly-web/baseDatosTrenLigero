'use strict'

var express = require('express');//carga express
var mmmaM18_8Controller = require('../../../controllers/smm/mayor/MMMA_M18_8');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM18_8Controller.getAllMaintenenceMMMA_M18_8);
api.post('/mmmaM18_8-save', mmmaM18_8Controller.createMaintenenceMMMA_M18_8);
api.put('/update-mmmaM18_8/:id', mmmaM18_8Controller.editMMMA_M18_8Data);
api.get('/get-history/:id', mmmaM18_8Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM18_8Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM18_8Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM18_8Controller.checkedApprovalByWorker);
api.get('/mmmaM18_8/:id', mmmaM18_8Controller.getMMMA_M18_8Data);

module.exports = api;//exporta el api