'use strict'

var express = require('express');//carga express
var mmmaM50Controller = require('../../../controllers/smm/mayor/MMMA_M50');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM50Controller.getAllMaintenenceMMMA_M50);
api.post('/mmmaM50-save', mmmaM50Controller.createMaintenenceMMMA_M50);
api.put('/update-mmmaM50/:id', mmmaM50Controller.editMMMA_M50Data);
api.get('/get-history/:id', mmmaM50Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM50Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM50Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM50Controller.checkedApprovalByWorker);
api.get('/mmmaM50/:id', mmmaM50Controller.getMMMA_M50Data);

module.exports = api;//exporta el api