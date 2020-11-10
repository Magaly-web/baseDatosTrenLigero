'use strict'

var express = require('express');//carga express
var mmmaM18_6Controller = require('../../../controllers/smm/mayor/MMMA_M18_6');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM18_6Controller.getAllMaintenenceMMMA_M18_6);
api.post('/mmmaM18_6-save', mmmaM18_6Controller.createMaintenenceMMMA_M18_6);
api.put('/update-mmmaM18_6/:id', mmmaM18_6Controller.editMMMA_M18_6Data);
api.get('/get-history/:id', mmmaM18_6Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM18_6Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM18_6Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM18_6Controller.checkedApprovalByWorker);
api.get('/mmmaM18_6/:id', mmmaM18_6Controller.getMMMA_M18_6Data);

module.exports = api;//exporta el api