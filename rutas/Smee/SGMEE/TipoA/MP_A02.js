
const express = require('express');
const api = express.Router();
const maintenenceTypeAController = require('../../../../controllers/smee/SGMEE/TipoA/MP_A02')

api.get('/all-forms', maintenenceTypeAController.getAllMaintenenceTypeA)
api.post('/create', maintenenceTypeAController.createMaintenenceTypeA)
api.get('/get-history/:id', maintenenceTypeAController.getHistoryOF)
api.put('/update-mpA01/:id', maintenenceTypeAController.editMaintenenceAData)
api.put('/historyUpdate/:id', maintenenceTypeAController.addNewHistoryrecord)
api.get('/getState/:id', maintenenceTypeAController.getStateCheckedApprovalByWorker)
api.put('/updateSate/:id', maintenenceTypeAController.checkedApprovalByWorker)
api.get('/mpA01/:id', maintenenceTypeAController.getMaintenenceAData);

module.exports = api;











/*'use strict'
var express = require('express');
var api = express.Router();
var mpA02Controller =require('../../../../controllers/smee/SGMEE/TipoA/MP_A02');


api.get('/all-forms', mpA02Controller.getAllMaintenenceTypeA)
api.post('/create', mpA02Controller.createMaintenenceTypeA)
api.get('/get-history/:id', mpA02Controller.getHistoryOF)
api.put('/update-mpA01/:id', mpA02Controller.editMaintenenceAData)
api.put('/historyUpdate/:id', mpA02Controller.addNewHistoryrecord)
api.get('/getState/:id', mpA02Controller.getStateCheckedApprovalByWorker)
api.put('/updateSate/:id', mpA02Controller.checkedApprovalByWorker)
api.get('/mpA01/:id', mpA02Controller.getMaintenenceAData);


//api.post('/mpA02_save', md_auth.ensureAuth, mpA02Controller.saveMP_A02);
module.exports= api;*/