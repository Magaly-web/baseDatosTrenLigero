'use strict'

var express = require('express');//carga express
var mmmaM59Controller = require('../../../controllers/smm/mayor/MMMA_M59');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM59Controller.getAllMaintenenceMMMA_M59);
api.post('/mmmaM59-save', mmmaM59Controller.createMaintenenceMMMA_M59);
api.put('/update-mmmaM59/:id', mmmaM59Controller.editMMMA_M59Data);
api.get('/get-history/:id', mmmaM59Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM59Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM59Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM59Controller.checkedApprovalByWorker);
api.get('/mmmaM59/:id', mmmaM59Controller.getMMMA_M59Data);

module.exports = api;//exporta el api