'use strict'

var express = require('express');//carga express
var mmmaM27Controller = require('../../../controllers/smm/mayor/MMMA_M27');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM27Controller.getAllMaintenenceMMMA_M27);
api.post('/mmmaM27-save', mmmaM27Controller.createMaintenenceMMMA_M27);
api.put('/update-mmmaM27/:id', mmmaM27Controller.editMMMA_M27Data);
api.get('/get-history/:id', mmmaM27Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM27Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM27Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM27Controller.checkedApprovalByWorker);
api.get('/mmmaM27/:id', mmmaM27Controller.getMMMA_M27Data);

module.exports = api;//exporta el api