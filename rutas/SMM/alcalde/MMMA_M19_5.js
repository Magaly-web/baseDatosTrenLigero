'use strict'

var express = require('express');//carga express
var mmmaM19_5Controller = require('../../../controllers/smm/mayor/MMMA_M19_5');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM19_5Controller.getAllMaintenenceMMMA_M19_5);
api.post('/mmmaM19_5-save', mmmaM19_5Controller.createMaintenenceMMMA_M19_5);
api.put('/update-mmmaM19_5/:id', mmmaM19_5Controller.editMMMA_M19_5Data);
api.get('/get-history/:id', mmmaM19_5Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM19_5Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM19_5Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM19_5Controller.checkedApprovalByWorker);
api.get('/mmmaM19_5/:id', mmmaM19_5Controller.getMMMA_M19_5Data);

module.exports = api;//exporta el api