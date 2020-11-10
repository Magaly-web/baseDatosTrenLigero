'use strict'

var express = require('express');//carga express
var mmmaM67Controller = require('../../../controllers/smm/mayor/MMMA_M67');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM67Controller.getAllMaintenenceMMMA_M67);
api.post('/mmmaM67-save', mmmaM67Controller.createMaintenenceMMMA_M67);
api.put('/update-mmmaM67/:id', mmmaM67Controller.editMMMA_M67Data);
api.get('/get-history/:id', mmmaM67Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM67Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM67Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM67Controller.checkedApprovalByWorker);
api.get('/mmmaM67/:id', mmmaM67Controller.getMMMA_M67Data);

module.exports = api;//exporta el api