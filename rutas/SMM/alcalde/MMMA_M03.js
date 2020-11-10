'use strict'

var express = require('express');//carga express
var mmmaM03Controller = require('../../../controllers/smm/mayor/MMMA_M03');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM03Controller.getAllMaintenenceMMMA_M03);
api.post('/mmmaM03-save', mmmaM03Controller.createMaintenenceMMMA_M03);
api.put('/update-mmmaM03/:id', mmmaM03Controller.editMMMA_M03Data);
api.get('/get-history/:id', mmmaM03Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM03Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM03Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM03Controller.checkedApprovalByWorker);
api.get('/mmmaM03/:id', mmmaM03Controller.getMMMA_M03Data);

module.exports = api;//exporta el api