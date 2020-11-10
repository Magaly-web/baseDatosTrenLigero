'use strict'

var express = require('express');//carga express
var mmmaM46Controller = require('../../../controllers/smm/mayor/MMMA_M46');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM46Controller.getAllMaintenenceMMMA_M46);
api.post('/mmmaM46-save', mmmaM46Controller.createMaintenenceMMMA_M46);
api.put('/update-mmmaM46/:id', mmmaM46Controller.editMMMA_M46Data);
api.get('/get-history/:id', mmmaM46Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM46Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM46Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM46Controller.checkedApprovalByWorker);
api.get('/mmmaM46/:id', mmmaM46Controller.getMMMA_M46Data);

module.exports = api;//exporta el api