'use strict'

var express = require('express');//carga express
var mmmeC01Controller = require('../../../../../controllers/smm/fichasMantenimiento/SGMM/ciclico/MMME_C01');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.

api.get('/all-forms', mmmeC01Controller.getAllMaintenenceMMME_C01);
api.post('/mmmeC01-save', mmmeC01Controller.createMaintenenceMMME_C01);
api.put('/update-mmmeC01/:id', mmmeC01Controller.editMMME_C01Data);
api.get('/get-history/:id', mmmeC01Controller.getHistoryOF);
api.put('/historyUpdate/:id', mmmeC01Controller.addNewHistoryrecord);
api.get('/getState/:id', mmmeC01Controller.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', mmmeC01Controller.checkedApprovalByWorker);
api.get('/mmmeC01/:id', mmmeC01Controller.getMMME_C01Data);

module.exports = api;//exporta el api