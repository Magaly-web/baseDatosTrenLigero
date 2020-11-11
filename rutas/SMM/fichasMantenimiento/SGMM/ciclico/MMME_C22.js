'use strict'

var express = require('express');//carga express
var mmmeC22Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C22');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC22Controller.getAllMaintenenceMMME_C22);
api.post('/mmmeC22-save', mmmeC22Controller.createMaintenenceMMME_C22);
api.put('/update-mmmeC22/:id', mmmeC22Controller.editMMME_C22Data);
api.get('/get-history/:id', mmmeC22Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC22Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC22Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC22Controller.checkedApprovalByWorker);
api.get('/mmmeC22/:id', mmmeC22Controller.getMMME_C22Data);

module.exports = api;//exporta el api