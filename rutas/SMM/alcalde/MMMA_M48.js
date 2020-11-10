'use strict'

var express = require('express');//carga express
var mmmaM48Controller = require('../../../controllers/smm/mayor/MMMA_M48');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM48Controller.getAllMaintenenceMMMA_M48);
api.post('/mmmaM48-save', mmmaM48Controller.createMaintenenceMMMA_M48);
api.put('/update-mmmaM48/:id', mmmaM48Controller.editMMMA_M48Data);
api.get('/get-history/:id', mmmaM48Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM48Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM48Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM48Controller.checkedApprovalByWorker);
api.get('/mmmaM48/:id', mmmaM48Controller.getMMMA_M48Data);

module.exports = api;//exporta el api