'use strict'

var express = require('express');//carga express
var mmmaM52Controller = require('../../../controllers/smm/mayor/MMMA_M52');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM52Controller.getAllMaintenenceMMMA_M52);
api.post('/mmmaM52-save', mmmaM52Controller.createMaintenenceMMMA_M52);
api.put('/update-mmmaM52/:id', mmmaM52Controller.editMMMA_M52Data);
api.get('/get-history/:id', mmmaM52Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM52Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM52Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM52Controller.checkedApprovalByWorker);
api.get('/mmmaM52/:id', mmmaM52Controller.getMMMA_M52Data);

module.exports = api;//exporta el api