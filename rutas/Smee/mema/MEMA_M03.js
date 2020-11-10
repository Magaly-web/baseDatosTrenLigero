const express = require('express');
const api = express.Router();
const MEMA_M03 = require('../../../controllers/smee/mema/MEMA_M03')

api.get('/all-formsM03', MEMA_M03.getAllmema_M03TypeM)
api.post('/createM03', MEMA_M03.createmema_M03TypeM)
api.get('/get-historyM03/:id', MEMA_M03.getHistoryOF)
api.put('/update-M03/:id', MEMA_M03.editmema_M03Data)
api.put('/historyUpdateM03/:id', MEMA_M03.addNewHistoryrecord)
api.get('/getStateM03/:id', MEMA_M03.getStateCheckedApprovalByWorker )
api.put('/updateSateM03/:id', MEMA_M03.checkedApprovalByWorker)
api.get('/MEMEM03/:id', MEMA_M03.getmema_M03Data)


module.exports = api;