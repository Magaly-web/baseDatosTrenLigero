'use strict'

var express = require('express');//carga express
var mmmaM42Controller = require('../../../controllers/smm/mayor/MMMA_M42');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM42Controller.getAllMaintenenceMMMA_M42);
api.post('/mmmaM42-save', mmmaM42Controller.createMaintenenceMMMA_M42);
api.put('/update-mmmaM42/:id', mmmaM42Controller.editMMMA_M42Data);
api.get('/get-history/:id', mmmaM42Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM42Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM42Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM42Controller.checkedApprovalByWorker);
api.get('/mmmaM42/:id', mmmaM42Controller.getMMMA_M42Data);

module.exports = api;//exporta el api