'use strict'

var express = require('express');//carga express
var mmmaM38Controller = require('../../../controllers/smm/mayor/MMMA_M38');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM38Controller.getAllMaintenenceMMMA_M38);
api.post('/mmmaM38-save', mmmaM38Controller.createMaintenenceMMMA_M38);
api.put('/update-mmmaM38/:id', mmmaM38Controller.editMMMA_M38Data);
api.get('/get-history/:id', mmmaM38Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM38Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM38Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM38Controller.checkedApprovalByWorker);
api.get('/mmmaM38/:id', mmmaM38Controller.getMMMA_M38Data);

module.exports = api;//exporta el api