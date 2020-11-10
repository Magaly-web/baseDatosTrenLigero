'use strict'

var express = require('express');//carga express
var mmmaM33Controller = require('../../../controllers/smm/mayor/MMMA_M33');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM33Controller.getAllMaintenenceMMMA_M33);
api.post('/mmmaM33-save', mmmaM33Controller.createMaintenenceMMMA_M33);
api.put('/update-mmmaM33/:id', mmmaM33Controller.editMMMA_M33Data);
api.get('/get-history/:id', mmmaM33Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM33Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM33Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM33Controller.checkedApprovalByWorker);
api.get('/mmmaM33/:id', mmmaM33Controller.getMMMA_M33Data);

module.exports = api;//exporta el api