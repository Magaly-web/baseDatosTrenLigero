'use strict'

var express = require('express');//carga express
var mmmaM53Controller = require('../../../controllers/smm/mayor/MMMA_M53');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM53Controller.getAllMaintenenceMMMA_M53);
api.post('/mmmaM53-save', mmmaM53Controller.createMaintenenceMMMA_M53);
api.put('/update-mmmaM53/:id', mmmaM53Controller.editMMMA_M53Data);
api.get('/get-history/:id', mmmaM53Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM53Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM53Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM53Controller.checkedApprovalByWorker);
api.get('/mmmaM53/:id', mmmaM53Controller.getMMMA_M53Data);

module.exports = api;//exporta el api