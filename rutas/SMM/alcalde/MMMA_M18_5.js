'use strict'

var express = require('express');//carga express
var mmmaM18_5Controller = require('../../../controllers/smm/mayor/MMMA_M18_5');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM18_5Controller.getAllMaintenenceMMMA_M18_5);
api.post('/mmmaM18_5-save', mmmaM18_5Controller.createMaintenenceMMMA_M18_5);
api.put('/update-mmmaM18_5/:id', mmmaM18_5Controller.editMMMA_M18_5Data);
api.get('/get-history/:id', mmmaM18_5Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM18_5Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM18_5Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM18_5Controller.checkedApprovalByWorker);
api.get('/mmmaM18_5/:id', mmmaM18_5Controller.getMMMA_M18_5Data);

module.exports = api;//exporta el api