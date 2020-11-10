'use strict'

var express = require('express');//carga express
var mmmaM51Controller = require('../../../controllers/smm/mayor/MMMA_M51');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM51Controller.getAllMaintenenceMMMA_M51);
api.post('/mmmaM51-save', mmmaM51Controller.createMaintenenceMMMA_M51);
api.put('/update-mmmaM51/:id', mmmaM51Controller.editMMMA_M51Data);
api.get('/get-history/:id', mmmaM51Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM51Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM51Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM51Controller.checkedApprovalByWorker);
api.get('/mmmaM51/:id', mmmaM51Controller.getMMMA_M51Data);

module.exports = api;//exporta el api