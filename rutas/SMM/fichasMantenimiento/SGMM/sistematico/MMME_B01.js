'use strict'

var express = require('express');//carga express
var mmmeB01Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/sistematico/MMME_B01');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeB01Controller.getAllMaintenenceMMME_B01);
api.post('/mmmeB01-save', mmmeB01Controller.createMaintenenceMMME_B01);
api.put('/update-mmmeB01/:id', mmmeB01Controller.editMMME_B01Data);
api.get('/get-history/:id', mmmeB01Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeB01Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeB01Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeB01Controller.checkedApprovalByWorker);
api.get('/mmmeB01/:id', mmmeB01Controller.getMMME_B01Data);

module.exports = api;//exporta el api