'use strict'

var express = require('express');//carga express
var mmmaM16Controller = require('../../../controllers/smm/mayor/MMMA_M16');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM16Controller.getAllMaintenenceMMMA_M16);
api.post('/mmmaM16-save', mmmaM16Controller.createMaintenenceMMMA_M16);
api.put('/update-mmmaM16/:id', mmmaM16Controller.editMMMA_M16Data);
api.get('/get-history/:id', mmmaM16Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM16Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM16Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM16Controller.checkedApprovalByWorker);
api.get('/mmmaM16/:id', mmmaM16Controller.getMMMA_M16Data);

module.exports = api;//exporta el api