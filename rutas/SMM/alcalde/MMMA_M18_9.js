'use strict'

var express = require('express');//carga express
var mmmaM18_9Controller = require('../../../controllers/smm/mayor/MMMA_M18_9');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM18_9Controller.getAllMaintenenceMMMA_M18_9);
api.post('/mmmaM18_9-save', mmmaM18_9Controller.createMaintenenceMMMA_M18_9);
api.put('/update-mmmaM18_9/:id', mmmaM18_9Controller.editMMMA_M18_9Data);
api.get('/get-history/:id', mmmaM18_9Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM18_9Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM18_9Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM18_9Controller.checkedApprovalByWorker);
api.get('/mmmaM18_9/:id', mmmaM18_9Controller.getMMMA_M18_9Data);

module.exports = api;//exporta el api