
const express = require('express');
const api = express.Router();
const MEMA_M10 = require('../../../controllers/smee/mema/MEMA_M10')

api.get('/all-formsM10', MEMA_M10.getAllmema_M10TypeM)
api.post('/createM10', MEMA_M10.createmema_M10TypeM)
api.get('/get-historyM10/:id', MEMA_M10.getHistoryOF)
api.put('/update-M10/:id', MEMA_M10.editmema_M10Data)
api.put('/historyUpdateM10/:id', MEMA_M10.addNewHistoryrecord)
api.get('/getStateM10/:id', MEMA_M10.getStateCheckedApprovalByWorker )
api.put('/updateSateM10/:id', MEMA_M10.checkedApprovalByWorker)
api.get('/MEMEM10/:id', MEMA_M10.getmema_M10Data)


module.exports = api;