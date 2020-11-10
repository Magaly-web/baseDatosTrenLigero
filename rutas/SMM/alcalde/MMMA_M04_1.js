'use strict'

var express = require('express');//carga express
var mmmaM04_1Controller = require('../../../controllers/smm/mayor/MMMA_M04_1');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.
var md_auth = require('../../../middlewares/authenticated'); 

api.get('/all-forms', mmmaM04_1Controller.getAllMaintenenceMMMA_M04_1);
api.post('/mmmaM04_1-save', mmmaM04_1Controller.createMaintenenceMMMA_M04_1);
api.put('/update-mmma_M04_1/:id', mmmaM04_1Controller.editMMMA_M04_1Data);
api.get('/get-history/:id', mmmaM04_1Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM04_1Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM04_1Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM04_1Controller.checkedApprovalByWorker);
api.get('/mmma_M04_1/:id', mmmaM04_1Controller.getMMMA_M04_1Data);

module.exports = api;//exporta el api