'use strict'

var express = require('express');//carga express
var mmmaM66Controller = require('../../../controllers/smm/mayor/MMMA_M66');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM66Controller.getAllMaintenenceMMMA_M66);
api.post('/mmmaM66-save', mmmaM66Controller.createMaintenenceMMMA_M66);
api.put('/update-mmmaM66/:id', mmmaM66Controller.editMMMA_M66Data);
api.get('/get-history/:id', mmmaM66Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM66Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM66Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM66Controller.checkedApprovalByWorker);
api.get('/mmmaM66/:id', mmmaM66Controller.getMMMA_M66Data);

module.exports = api;//exporta el api