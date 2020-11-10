'use strict'

var express = require('express');//carga express
var mmmaM18_14Controller = require('../../../controllers/smm/mayor/MMMA_M18_14');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM18_14Controller.getAllMaintenenceMMMA_M18_14);
api.post('/mmmaM18_14-save', mmmaM18_14Controller.createMaintenenceMMMA_M18_14);
api.put('/update-mmmaM18_14/:id', mmmaM18_14Controller.editMMMA_M18_14Data);
api.get('/get-history/:id', mmmaM18_14Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM18_14Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM18_14Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM18_14Controller.checkedApprovalByWorker);
api.get('/mmmaM18_14/:id', mmmaM18_14Controller.getMMMA_M18_14Data);

module.exports = api;//exporta el api