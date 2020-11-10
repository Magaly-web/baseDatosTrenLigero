'use strict'

var express = require('express');//carga express
var mmmaM24Controller = require('../../../controllers/smm/mayor/MMMA_M24');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM24Controller.getAllMaintenenceMMMA_M24);
api.post('/mmmaM24-save', mmmaM24Controller.createMaintenenceMMMA_M24);
api.put('/update-mmmaM24/:id', mmmaM24Controller.editMMMA_M24Data);
api.get('/get-history/:id', mmmaM24Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM24Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM24Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM24Controller.checkedApprovalByWorker);
api.get('/mmmaM24/:id', mmmaM24Controller.getMMMA_M24Data);

module.exports = api;//exporta el api