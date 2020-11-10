'use strict'

var express = require('express');//carga express
var mmmaM22Controller = require('../../../controllers/smm/mayor/MMMA_M22');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM22Controller.getAllMaintenenceMMMA_M22);
api.post('/mmmaM22-save', mmmaM22Controller.createMaintenenceMMMA_M22);
api.put('/update-mmmaM22/:id', mmmaM22Controller.editMMMA_M22Data);
api.get('/get-history/:id', mmmaM22Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM22Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM22Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM22Controller.checkedApprovalByWorker);
api.get('/mmmaM22/:id', mmmaM22Controller.getMMMA_M22Data);

module.exports = api;//exporta el api