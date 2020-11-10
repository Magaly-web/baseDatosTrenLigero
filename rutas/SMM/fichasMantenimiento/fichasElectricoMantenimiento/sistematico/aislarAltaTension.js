'use strict'

var express = require('express');//carga express
var aislarATController = require('../../../../../controllers/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/aislarAltaTension');//carga el file de los controladores de usuario

var api = express.Router();//se llama al metodo router para tener acceso a los metodos get, post, delete, put, etc.  

api.get('/all-forms', aislarATController.getAllMaintenenceaislarAT);
api.post('/aislarAT-save', aislarATController.createMaintenenceaislarAT);
api.put('/update-aislarAT/:id', aislarATController.editaislarATData);
api.get('/get-history/:id', aislarATController.getHistoryOF);
api.put('/historyUpdate/:id', aislarATController.addNewHistoryrecord);
api.get('/getState/:id', aislarATController.getStateCheckedApprovalByWorker);
api.put('/updateSate/:id', aislarATController.checkedApprovalByWorker);
api.get('/aislarAT/:id', aislarATController.getaislarATData);

module.exports = api;//exporta el api