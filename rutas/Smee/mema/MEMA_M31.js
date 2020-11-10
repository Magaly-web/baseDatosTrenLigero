
const express = require('express');
const api = express.Router();
const MEMA_M31 = require('../../../controllers/smee/mema/MEMA_M31')

api.get('/all-formsM31', MEMA_M31.getAllmema_M31TypeM)
api.post('/createM31', MEMA_M31.createmema_M31TypeM)
api.get('/get-historyM31/:id', MEMA_M31.getHistoryOF)
api.put('/update-M31/:id', MEMA_M31.editmema_M31Data)
api.put('/historyUpdateM31/:id', MEMA_M31.addNewHistoryrecord)
api.get('/getStateM31/:id', MEMA_M31.getStateCheckedApprovalByWorker )
api.put('/updateSateM31/:id', MEMA_M31.checkedApprovalByWorker)
api.get('/MEMEM31/:id', MEMA_M31.getmema_M31Data)


module.exports = api;