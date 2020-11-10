'use strict'

var express = require('express');//carga express
var mmmaM49Controller = require('../../../controllers/smm/mayor/MMMA_M49');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM49Controller.getAllMaintenenceMMMA_M49);
api.post('/mmmaM49-save', mmmaM49Controller.createMaintenenceMMMA_M49);
api.put('/update-mmmaM49/:id', mmmaM49Controller.editMMMA_M49Data);
api.get('/get-history/:id', mmmaM49Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM49Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM49Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM49Controller.checkedApprovalByWorker);
api.get('/mmmaM49/:id', mmmaM49Controller.getMMMA_M49Data);

module.exports = api;//exporta el api