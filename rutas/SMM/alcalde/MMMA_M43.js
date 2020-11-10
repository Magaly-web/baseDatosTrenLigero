'use strict'

var express = require('express');//carga express
var mmmaM43Controller = require('../../../controllers/smm/mayor/MMMA_M43');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM43Controller.getAllMaintenenceMMMA_M43);
api.post('/mmmaM43-save', mmmaM43Controller.createMaintenenceMMMA_M43);
api.put('/update-mmmaM43/:id', mmmaM43Controller.editMMMA_M43Data);
api.get('/get-history/:id', mmmaM43Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM43Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM43Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM43Controller.checkedApprovalByWorker);
api.get('/mmmaM43/:id', mmmaM43Controller.getMMMA_M43Data);

module.exports = api;//exporta el api