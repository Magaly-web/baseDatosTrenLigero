

const express = require('express');
const api = express.Router();
const MEMA_M39 = require('../../../controllers/smee/mema/MEMA_M39')

api.get('/all-formsM39', MEMA_M39.getAllmema_M39TypeM)
api.post('/createM39', MEMA_M39.createmema_M39TypeM)
api.get('/get-historyM39/:id', MEMA_M39.getHistoryOF)
api.put('/update-M39/:id', MEMA_M39.editmema_M39Data)
api.put('/historyUpdateM39/:id', MEMA_M39.addNewHistoryrecord)
api.get('/getStateM39/:id', MEMA_M39.getStateCheckedApprovalByWorker )
api.put('/updateSateM39/:id', MEMA_M39.checkedApprovalByWorker)
api.get('/MEMEM39/:id', MEMA_M39.getmema_M39Data)


module.exports = api;