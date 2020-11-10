'use strict'

var express = require('express');//carga express
var mmmaM35Controller = require('../../../controllers/smm/mayor/MMMA_M35');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM35Controller.getAllMaintenenceMMMA_M35);
api.post('/mmmaM35-save', mmmaM35Controller.createMaintenenceMMMA_M35);
api.put('/update-mmmaM35/:id', mmmaM35Controller.editMMMA_M35Data);
api.get('/get-history/:id', mmmaM35Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM35Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM35Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM35Controller.checkedApprovalByWorker);
api.get('/mmmaM35/:id', mmmaM35Controller.getMMMA_M35Data);

module.exports = api;//exporta el api