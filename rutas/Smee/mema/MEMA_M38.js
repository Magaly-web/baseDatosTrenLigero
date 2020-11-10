
const express = require('express');
const api = express.Router();
const MEMA_M38 = require('../../../controllers/smee/mema/MEMA_M38')

api.get('/all-formsM38', MEMA_M38.getAllmema_M38TypeM)
api.post('/createM38', MEMA_M38.createmema_M38TypeM)
api.get('/get-historyM38/:id', MEMA_M38.getHistoryOF)
api.put('/update-M38/:id', MEMA_M38.editmema_M38Data)
api.put('/historyUpdateM38/:id', MEMA_M38.addNewHistoryrecord)
api.get('/getStateM38/:id', MEMA_M38.getStateCheckedApprovalByWorker )
api.put('/updateSateM38/:id', MEMA_M38.checkedApprovalByWorker)
api.get('/MEMEM38/:id', MEMA_M38.getmema_M38Data)


module.exports = api;