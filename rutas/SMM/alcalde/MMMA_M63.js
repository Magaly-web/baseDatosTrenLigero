'use strict'

var express = require('express');//carga express
var mmmaM63Controller = require('../../../controllers/smm/mayor/MMMA_M63');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM63Controller.getAllMaintenenceMMMA_M63);
api.post('/mmmaM63-save', mmmaM63Controller.createMaintenenceMMMA_M63);
api.put('/update-mmmaM63/:id', mmmaM63Controller.editMMMA_M63Data);
api.get('/get-history/:id', mmmaM63Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM63Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM63Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM63Controller.checkedApprovalByWorker);
api.get('/mmmaM63/:id', mmmaM63Controller.getMMMA_M63Data);

module.exports = api;//exporta el api