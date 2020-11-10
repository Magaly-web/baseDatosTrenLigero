'use strict'

var express = require('express');//carga express
var mmmaM12Controller = require('../../../controllers/smm/mayor/MMMA_M12');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmaM12Controller.getAllMaintenenceMMMA_M12);
api.post('/mmmaM12-save', mmmaM12Controller.createMaintenenceMMMA_M12);
api.put('/update-mmmaM12/:id', mmmaM12Controller.editMMMA_M12Data);
api.get('/get-history/:id', mmmaM12Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmaM12Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmaM12Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmaM12Controller.checkedApprovalByWorker);
api.get('/mmmaM12/:id', mmmaM12Controller.getMMMA_M12Data);

module.exports = api;//exporta el api