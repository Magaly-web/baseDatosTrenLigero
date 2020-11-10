

const express = require('express');
const api = express.Router();
const MEMA_M11 = require('../../../controllers/smee/mema/MEMA_M11')

api.get('/all-formsM11', MEMA_M11.getAllmema_M11TypeM)
api.post('/createM11', MEMA_M11.createmema_M11TypeM)
api.get('/get-historyM11/:id', MEMA_M11.getHistoryOF)
api.put('/update-M11/:id', MEMA_M11.editmema_M11Data)
api.put('/historyUpdateM11/:id', MEMA_M11.addNewHistoryrecord)
api.get('/getStateM11/:id', MEMA_M11.getStateCheckedApprovalByWorker )
api.put('/updateSateM11/:id', MEMA_M11.checkedApprovalByWorker)
api.get('/MEMEM11/:id', MEMA_M11.getmema_M11Data)


module.exports = api;