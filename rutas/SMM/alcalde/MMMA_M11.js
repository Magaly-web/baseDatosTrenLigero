'use strict'

var express = require('express');//carga express
var mmmaM11Controller = require('../../../controllers/smm/mayor/MMMA_M11');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM11Controller.getAllMaintenenceMMMA_M11);
api.post('/mmmaM11-save', mmmaM11Controller.createMaintenenceMMMA_M11);
api.put('/update-mmmaM11/:id', mmmaM11Controller.editMMMA_M11Data);
api.get('/get-history/:id', mmmaM11Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM11Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM11Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM11Controller.checkedApprovalByWorker);
api.get('/mmmaM11/:id', mmmaM11Controller.getMMMA_M11Data);

module.exports = api;//exporta el api