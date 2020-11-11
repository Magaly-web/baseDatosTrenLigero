'use strict'

var express = require('express');//carga express
var mmmeC14Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C14');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC14Controller.getAllMaintenenceMMME_C14);
api.post('/mmmeC14-save', mmmeC14Controller.createMaintenenceMMME_C14);
api.put('/update-mmmeC14/:id', mmmeC14Controller.editMMME_C14Data);
api.get('/get-history/:id', mmmeC14Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC14Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC14Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC14Controller.checkedApprovalByWorker);
api.get('/mmmeC14/:id', mmmeC14Controller.getMMME_C14Data);

module.exports = api;//exporta el api