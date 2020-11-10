'use strict'

var express = require('express');//carga express
var mmmaM44Controller = require('../../../controllers/smm/mayor/MMMA_M44');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM44Controller.getAllMaintenenceMMMA_M44);
api.post('/mmmaM44-save', mmmaM44Controller.createMaintenenceMMMA_M44);
api.put('/update-mmmaM44/:id', mmmaM44Controller.editMMMA_M44Data);
api.get('/get-history/:id', mmmaM44Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM44Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM44Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM44Controller.checkedApprovalByWorker);
api.get('/mmmaM44/:id', mmmaM44Controller.getMMMA_M44Data);

module.exports = api;//exporta el api