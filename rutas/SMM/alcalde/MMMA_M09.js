'use strict'

var express = require('express');//carga express
var mmmaM09Controller = require('../../../controllers/smm/mayor/MMMA_M09');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM09Controller.getAllMaintenenceMMMA_M09);
api.post('/mmmaM09-save', mmmaM09Controller.createMaintenenceMMMA_M09);
api.put('/update-mmmaM09/:id', mmmaM09Controller.editMMMA_M09Data);
api.get('/get-history/:id', mmmaM09Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM09Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM09Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM09Controller.checkedApprovalByWorker);
api.get('/mmmaM09/:id', mmmaM09Controller.getMMMA_M09Data);

module.exports = api;//exporta el api