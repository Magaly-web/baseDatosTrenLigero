'use strict'

var express = require('express');//carga express
var mmmaM13Controller = require('../../../controllers/smm/mayor/MMMA_M13');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM13Controller.getAllMaintenenceMMMA_M13);
api.post('/mmmaM13-save', mmmaM13Controller.createMaintenenceMMMA_M13);
api.put('/update-mmmaM13/:id', mmmaM13Controller.editMMMA_M13Data);
api.get('/get-history/:id', mmmaM13Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM13Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM13Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM13Controller.checkedApprovalByWorker);
api.get('/mmmaM13/:id', mmmaM13Controller.getMMMA_M13Data);

module.exports = api;//exporta el api