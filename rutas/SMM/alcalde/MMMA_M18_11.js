'use strict'

var express = require('express');//carga express
var mmmaM18_11Controller = require('../../../controllers/smm/mayor/MMMA_M18_11');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM18_11Controller.getAllMaintenenceMMMA_M18_11);
api.post('/mmmaM18_11-save', mmmaM18_11Controller.createMaintenenceMMMA_M18_11);
api.put('/update-mmmaM18_11/:id', mmmaM18_11Controller.editMMMA_M18_11Data);
api.get('/get-history/:id', mmmaM18_11Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM18_11Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM18_11Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM18_11Controller.checkedApprovalByWorker);
api.get('/mmmaM18_11/:id', mmmaM18_11Controller.getMMMA_M18_11Data);

module.exports = api;//exporta el api