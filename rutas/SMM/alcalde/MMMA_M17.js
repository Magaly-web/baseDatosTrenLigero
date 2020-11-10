'use strict'

var express = require('express');//carga express
var mmmaM17Controller = require('../../../controllers/smm/mayor/MMMA_M17');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM17Controller.getAllMaintenenceMMMA_M17);
api.post('/mmmaM17-save', mmmaM17Controller.createMaintenenceMMMA_M17);
api.put('/update-mmmaM17/:id', mmmaM17Controller.editMMMA_M17Data);
api.get('/get-history/:id', mmmaM17Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM17Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM17Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM17Controller.checkedApprovalByWorker);
api.get('/mmmaM17/:id', mmmaM17Controller.getMMMA_M17Data);

module.exports = api;//exporta el api