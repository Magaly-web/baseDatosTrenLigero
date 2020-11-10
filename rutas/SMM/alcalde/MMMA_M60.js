'use strict'

var express = require('express');//carga express
var mmmaM60Controller = require('../../../controllers/smm/mayor/MMMA_M60');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM60Controller.getAllMaintenenceMMMA_M60);
api.post('/mmmaM60-save', mmmaM60Controller.createMaintenenceMMMA_M60);
api.put('/update-mmmaM60/:id', mmmaM60Controller.editMMMA_M60Data);
api.get('/get-history/:id', mmmaM60Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM60Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM60Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM60Controller.checkedApprovalByWorker);
api.get('/mmmaM60/:id', mmmaM60Controller.getMMMA_M60Data);

module.exports = api;//exporta el api