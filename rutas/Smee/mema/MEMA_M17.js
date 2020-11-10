
const express = require('express');
const api = express.Router();
const MEMA_M17 = require('../../../controllers/smee/mema/MEMA_M17')

api.get('/all-formsM17', MEMA_M17.getAllmema_M17TypeM)
api.post('/createM17', MEMA_M17.createmema_M17TypeM)
api.get('/get-historyM17/:id', MEMA_M17.getHistoryOF)
api.put('/update-M17/:id', MEMA_M17.editmema_M17Data)
api.put('/historyUpdateM17/:id', MEMA_M17.addNewHistoryrecord)
api.get('/getStateM17/:id', MEMA_M17.getStateCheckedApprovalByWorker )
api.put('/updateSateM17/:id', MEMA_M17.checkedApprovalByWorker)
api.get('/MEMEM17/:id', MEMA_M17.getmema_M17Data)


module.exports = api;