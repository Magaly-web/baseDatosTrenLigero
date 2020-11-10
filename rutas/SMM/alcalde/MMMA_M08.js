'use strict'

var express = require('express');//carga express
var mmmaM08Controller = require('../../../controllers/smm/mayor/MMMA_M08');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM08Controller.getAllMaintenenceMMMA_M08);
api.post('/mmmaM08-save', mmmaM08Controller.createMaintenenceMMMA_M08);
api.put('/update-mmmaM08/:id', mmmaM08Controller.editMMMA_M08Data);
api.get('/get-history/:id', mmmaM08Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM08Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM08Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM08Controller.checkedApprovalByWorker);
api.get('/mmmaM08/:id', mmmaM08Controller.getMMMA_M08Data);

module.exports = api;//exporta el api