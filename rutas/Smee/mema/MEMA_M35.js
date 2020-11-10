
const express = require('express');
const api = express.Router();
const MEMA_M35 = require('../../../controllers/smee/mema/MEMA_M35')

api.get('/all-formsM35', MEMA_M35.getAllmema_M35TypeM)
api.post('/createM35', MEMA_M35.createmema_M35TypeM)
api.get('/get-historyM35/:id', MEMA_M35.getHistoryOF)
api.put('/update-M35/:id', MEMA_M35.editmema_M35Data)
api.put('/historyUpdateM35/:id', MEMA_M35.addNewHistoryrecord)
api.get('/getStateM35/:id', MEMA_M35.getStateCheckedApprovalByWorker )
api.put('/updateSateM35/:id', MEMA_M35.checkedApprovalByWorker)
api.get('/MEMEM35/:id', MEMA_M35.getmema_M35Data)


module.exports = api;