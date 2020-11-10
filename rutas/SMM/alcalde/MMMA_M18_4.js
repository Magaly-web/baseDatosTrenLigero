'use strict'

var express = require('express');//carga express
var mmmaM18_4Controller = require('../../../controllers/smm/mayor/MMMA_M18_4');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM18_4Controller.getAllMaintenenceMMMA_M18_4);
api.post('/mmmaM18_4-save', mmmaM18_4Controller.createMaintenenceMMMA_M18_4);
api.put('/update-mmmaM18_4/:id', mmmaM18_4Controller.editMMMA_M18_4Data);
api.get('/get-history/:id', mmmaM18_4Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM18_4Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM18_4Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM18_4Controller.checkedApprovalByWorker);
api.get('/mmmaM18_4/:id', mmmaM18_4Controller.getMMMA_M18_4Data);

module.exports = api;//exporta el api