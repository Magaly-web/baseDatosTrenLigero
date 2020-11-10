'use strict'

var express = require('express');//carga express
var mmmaM40Controller = require('../../../controllers/smm/mayor/MMMA_M40');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM40Controller.getAllMaintenenceMMMA_M40);
api.post('/mmmaM40-save', mmmaM40Controller.createMaintenenceMMMA_M40);
api.put('/update-mmmaM40/:id', mmmaM40Controller.editMMMA_M40Data);
api.get('/get-history/:id', mmmaM40Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM40Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM40Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM40Controller.checkedApprovalByWorker);
api.get('/mmmaM40/:id', mmmaM40Controller.getMMMA_M40Data);

module.exports = api;//exporta el api