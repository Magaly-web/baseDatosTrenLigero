'use strict'

var express = require('express');//carga express
var mmmaM06Controller = require('../../../controllers/smm/mayor/MMMA_M06');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM06Controller.getAllMaintenenceMMMA_M06);
api.post('/mmmaM06-save', mmmaM06Controller.createMaintenenceMMMA_M06);
api.put('/update-mmmaM06/:id', mmmaM06Controller.editMMMA_M06Data);
api.get('/get-history/:id', mmmaM06Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM06Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM06Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM06Controller.checkedApprovalByWorker);
api.get('/mmmaM06/:id', mmmaM06Controller.getMMMA_M06Data);

module.exports = api;//exporta el api