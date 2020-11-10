
const express = require('express');
const api = express.Router();
const MEMA_M40 = require('../../../controllers/smee/mema/MEMA_M40')

api.get('/all-formsM40', MEMA_M40.getAllmema_M40TypeM)
api.post('/createM40', MEMA_M40.createmema_M40TypeM)
api.get('/get-historyM40/:id', MEMA_M40.getHistoryOF)
api.put('/update-M40/:id', MEMA_M40.editmema_M40Data)
api.put('/historyUpdateM40/:id', MEMA_M40.addNewHistoryrecord)
api.get('/getStateM40/:id', MEMA_M40.getStateCheckedApprovalByWorker )
api.put('/updateSateM40/:id', MEMA_M40.checkedApprovalByWorker)
api.get('/MEMEM40/:id', MEMA_M40.getmema_M40Data)


module.exports = api;