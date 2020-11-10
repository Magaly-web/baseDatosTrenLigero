
const express = require('express');
const api = express.Router();
const MEMA_M22 = require('../../../controllers/smee/mema/MEMA_M22')

api.get('/all-formsM22', MEMA_M22.getAllmema_M22TypeM)
api.post('/createM22', MEMA_M22.createmema_M22TypeM)
api.get('/get-historyM22/:id', MEMA_M22.getHistoryOF)
api.put('/update-M22/:id', MEMA_M22.editmema_M22Data)
api.put('/historyUpdateM22/:id', MEMA_M22.addNewHistoryrecord)
api.get('/getStateM22/:id', MEMA_M22.getStateCheckedApprovalByWorker )
api.put('/updateSateM22/:id', MEMA_M22.checkedApprovalByWorker)
api.get('/MEMEM22/:id', MEMA_M22.getmema_M22Data)


module.exports = api;