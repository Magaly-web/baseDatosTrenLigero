'use strict'

var express = require('express');//carga express
var mmmaM65Controller = require('../../../controllers/smm/mayor/MMMA_M65');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM65Controller.getAllMaintenenceMMMA_M65);
api.post('/mmmaM65-save', mmmaM65Controller.createMaintenenceMMMA_M65);
api.put('/update-mmmaM65/:id', mmmaM65Controller.editMMMA_M65Data);
api.get('/get-history/:id', mmmaM65Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM65Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM65Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM65Controller.checkedApprovalByWorker);
api.get('/mmmaM65/:id', mmmaM65Controller.getMMMA_M65Data);

module.exports = api;//exporta el api