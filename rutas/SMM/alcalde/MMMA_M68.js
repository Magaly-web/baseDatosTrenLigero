'use strict'

var express = require('express');//carga express
var mmmaM68Controller = require('../../../controllers/smm/mayor/MMMA_M68');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM68Controller.getAllMaintenenceMMMA_M68);
api.post('/mmmaM68-save', mmmaM68Controller.createMaintenenceMMMA_M68);
api.put('/update-mmmaM68/:id', mmmaM68Controller.editMMMA_M68Data);
api.get('/get-history/:id', mmmaM68Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM68Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM68Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM68Controller.checkedApprovalByWorker);
api.get('/mmmaM68/:id', mmmaM68Controller.getMMMA_M68Data);

module.exports = api;//exporta el api